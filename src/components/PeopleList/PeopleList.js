import { useContext, useState, useEffect } from 'react';
import './PeopleList.scss';
import Person from '../Person/Person';
import { AppContext } from '../../context/AppContext/AppContext';
import PeopleListContext from '../../context/PeopleListContext/PeopleListContext';
import ScreenContext from '../../context/ScreenContext/ScreenContext';
import DeletePersonDialog from '../DeletePersonDialog/DeletePersonDialog';
import { removeDataFromIDBStore } from '../../utils/IndexedDB/indexedDBManagement';
import AddPersonUI from '../AddPersonUI/AddPersonUI';
import AddPersonUILarge from '../AddPersonUILarge/AddPersonUILarge';
import EditPersonUI from '../EditPersonUI/EditPersonUI';
import Notification from '../Notification/Notification';
import filterFavouritePeople from '../../helpers/filterFavouritePeople';
import sortingLogic from '../../helpers/sortingLogic';
import matchMinMedia from '../../helpers/matchMinMedia';

function PeopleList(props) {
  const { currentPersonID, setCurrentPersonID } = props;
  const [peopleList, setPeopleList] = useContext(PeopleListContext);
  const [, setIsScreenLarge] = useContext(ScreenContext);
  const {
    state,
    dispatch,
    favState,
    backgroundState,
    showEditPersonUIState,
    showAddPersonUIState,
  } = useContext(AppContext);
  const [showAddPersonUI, setShowAddPersonUI] = showAddPersonUIState;
  const [showFavourites] = favState;
  const [showBackground, setShowBackground] = backgroundState;
  const [showEditPersonUI, setShowEditPersonUI] = showEditPersonUIState;
  const [showDeletePersonDialog, setShowDeletePersonDialog] = useState(false);
  const [deletionUserID, setDeletionUserID] = useState(null);
  const [isTimePassed, setIsTimePassed] = useState(true);
  const [isSorted, setIsSorted] = useState(false);

  const handleDeletePerson = (e, id) => {
    if (!matchMinMedia(769)) {
      setCurrentPersonID(null);
    }
    e.stopPropagation();
    setShowDeletePersonDialog(true);
    setDeletionUserID(id);
  };
  const toggleAddPersonUI = () => {
    setShowAddPersonUI(() => !showAddPersonUI);
  };

  const removeItem = (id) => {
    const oldPeople = state.people;
    let newPeople = oldPeople.filter((person) => person.id !== id);
    try {
      removeDataFromIDBStore('userDatabase', '1', 'people', id);
    } catch (err) {
      console.log(err);
    }
    dispatch({
      type: 'REMOVE_PERSON',
      payload: { people: newPeople },
    });

    setShowBackground(false);
  };

  const handleSelectPerson = (id) => {
    if (!matchMinMedia(769)) {
      setShowBackground(true);
    }

    if (currentPersonID !== id) {
      setCurrentPersonID(id);
    }
  };

  const handleAddPersonUIForLargerScreen = () => {
    setShowAddPersonUI(!showAddPersonUI);
  };

  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.key === 'Escape') {
        setCurrentPersonID(null);
        setShowBackground(false);
        setShowAddPersonUI(false);
      }
    };

    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [setCurrentPersonID, setShowBackground, setShowAddPersonUI]);

  useEffect(() => {
    const people = showFavourites
      ? filterFavouritePeople(state.people)
      : state.people;
    setPeopleList(people);
  }, [showFavourites, state.people, setPeopleList]);

  useEffect(() => {
    const handleResize = () => {
      // Sets several states according to the screen size, and active UI's (media queries weren't enough).
      const screenResult = matchMinMedia(769);
      if (screenResult) {
        setIsScreenLarge(() => true);
      } else {
        setIsScreenLarge(() => false);
      }
      if (
        screenResult &&
        (showAddPersonUI || currentPersonID || showDeletePersonDialog) &&
        showBackground
      ) {
        setShowBackground(false);
      } else if (
        !screenResult &&
        (showAddPersonUI || currentPersonID || showDeletePersonDialog) &&
        !showBackground
      ) {
        setShowBackground(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [
    showBackground,
    setShowBackground,
    showAddPersonUI,
    currentPersonID,
    showDeletePersonDialog,
    setIsScreenLarge,
  ]);

  useEffect(() => {
    if (peopleList.length && !isSorted) {
      const nextSort = 'sortByName';
      const args = {
        peopleList,
        setPeopleList,
        nextSort,
        showFavourites,
        dispatch,
      };
      sortingLogic(args);
      setIsSorted(true);
    }
  }, [dispatch, peopleList, setPeopleList, isSorted, showFavourites]);
  return (
    <>
      {state.isNotificationOpen && (
        <Notification
          isTimePassed={isTimePassed}
          setIsTimePassed={setIsTimePassed}
        />
      )}
      {showDeletePersonDialog && (
        <DeletePersonDialog
          setShowDeletePersonDialog={setShowDeletePersonDialog}
          removeItem={removeItem}
          deletionUserID={deletionUserID}
          setCurrentPersonID={setCurrentPersonID}
        />
      )}
      <ul className="people-list">
        {peopleList &&
          peopleList.map((person) => (
            <Person
              key={person.id}
              person={person}
              handleDeletePerson={handleDeletePerson}
              currentPersonID={currentPersonID}
              setCurrentPersonID={setCurrentPersonID}
              handleSelectPerson={handleSelectPerson}
              setShowBackground={setShowBackground}
            />
          ))}
        {(showAddPersonUI && (
          <AddPersonUI
            setShowBackground={setShowBackground}
            toggleAddPersonUI={toggleAddPersonUI}
          />
        )) || (
          <AddPersonUILarge
            handleAddPersonUIForLargerScreen={handleAddPersonUIForLargerScreen}
          />
        )}
      </ul>
      {showEditPersonUI && (
        <EditPersonUI
          currentPersonID={currentPersonID}
          setShowEditPersonUI={setShowEditPersonUI}
          setShowBackground={setShowBackground}
        />
      )}
    </>
  );
}

export default PeopleList;
