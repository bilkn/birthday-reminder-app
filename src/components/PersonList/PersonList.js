import { useContext, useState, useEffect } from 'react';
import './PersonList.scss';
import Person from '../Person/Person';
import EmptyBox from '../EmptyBox/EmptyBox';
import { AppContext } from '../../context/AppContext/AppContext';
import PeopleListContext from '../../context/PeopleListContext/PeopleListContext';
import DeletePersonDialog from '../DeletePersonDialog/DeletePersonDialog';
import { removeDataFromIDBStore } from '../../utils/IndexedDB/indexedDBManagement';
import AddPersonUI from '../AddPersonUI/AddPersonUI';
import EditPersonUI from '../EditPersonUI/EditPersonUI';
import Notification from '../Notification/Notification';
import filterFavouritePeople from '../../helper/filterFavouritePeople';
import SortingSelectbox from '../SortingSelectbox/SortingSelectbox';

function PersonList(props) {
  const { currentPersonID, setCurrentPersonID } = props;
  const {
    state,
    dispatch,
    favState,
    backgroundState,
    showEditPersonUIState,
    showAddPersonUIState,
  } = useContext(AppContext);
  const [peopleList, setPeopleList] = useContext(PeopleListContext);
  const [showAddPersonUI, setShowAddPersonUI] = showAddPersonUIState;
  const [showFavourites] = favState;
  const [showBackground, setShowBackground] = backgroundState;
  const [showEditPersonUI, setShowEditPersonUI] = showEditPersonUIState;
  const [showDeletePersonDialog, setShowDeletePersonDialog] = useState(false);
  const [deletionUserID, setDeletionUserID] = useState(null);
  const [isTimePassed, setIsTimePassed] = useState(true);
  const handleDeletePerson = (e, id) => {
    const mql = window.matchMedia('(min-width: 768px)');
    if (mql.matches) {
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
    removeDataFromIDBStore('userDatabase', '1', 'people', id);
    dispatch({
      type: 'REMOVE_PERSON',
      payload: { people: newPeople },
    });

    setShowBackground(false);
  };

  const handleSelectPerson = (id) => {
    const mql = window.matchMedia('(max-width: 768px)');
    if (mql.matches) {
      setShowBackground(true);
    }

    if (currentPersonID !== id) {
      setCurrentPersonID(id);
    }
  };

  const handleAddPersonUIForLargerScreen = () => {
    setShowAddPersonUI(!showAddPersonUI);
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Escape') {
      setCurrentPersonID(null);
      setShowBackground(false);
      setShowAddPersonUI(() => false);
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  });

  useEffect(() => {
    const people = showFavourites
      ? filterFavouritePeople(state.people)
      : state.people;
    setPeopleList(people);
  }, [showFavourites, state.people, setPeopleList]);

  useEffect(() => {
    const handleResize = () => {
      // Sets several states according to the screen size, and active UI's (media queries weren't enough).
      const mql = window.matchMedia('(min-width: 769px)');
      if (mql.matches && showDeletePersonDialog) {
        setCurrentPersonID(null);
      }
      if (
        mql.matches &&
        (showAddPersonUI || currentPersonID) &&
        showBackground
      ) {
        setShowBackground(() => false);
      } else if (
        !mql.matches &&
        (showAddPersonUI || currentPersonID) &&
        !showBackground
      ) {
        setShowBackground(() => true);
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
    setCurrentPersonID,
    showDeletePersonDialog,
  ]);
  return (
    <>
      <SortingSelectbox />

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
      <ul className="person-list">
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
          <EmptyBox
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

export default PersonList;
