import { useContext, useState, useEffect } from 'react';
import Person from '../Person/Person';
import EmptyBox from '../EmptyBox/EmptyBox';
import './PersonList.scss';
import { AppContext } from '../../context/AppContext/AppContext';
import DeletePersonDialog from '../DeletePersonDialog/DeletePersonDialog';
import { removeDataFromIDBStore } from '../../utils/IndexedDB/indexedDBManagement';
import removePersonFromFavourites from '../../helper/removePersonFromFavourites';
import EditPersonUI from '../EditPersonUI/EditPersonUI';
import Modal from '../Modal/Modal';
import AddPersonUI from '../AddPersonUI/AddPersonUI';

function PersonList(props) {
  const { currentPersonID, setCurrentPersonID, showUI } = props;
  const {
    state,
    dispatch,
    favState,
    backgroundState,
    showEditPersonUIState,
  } = useContext(AppContext);
  const [showFavourites] = favState;
  const [showDeletePersonDialog, setShowDeletePersonDialog] = useState(false);
  const [showEditPersonUI, setShowEditPersonUI] = showEditPersonUIState;
  const [deletionUserID, setDeletionUserID] = useState(null);
  const [, setShowBackground] = backgroundState;
  const [isTimePassed, setIsTimePassed] = useState(true);
  const [showAddPersonUI, setShowAddPersonUI] = useState(false);
  const personList = showFavourites ? state.favourites : state.people;
  const removeItemHandler = (e, id) => {
    e.stopPropagation();
    setShowDeletePersonDialog(true);
    setDeletionUserID(id);
  };
  const showAddPersonUIHandler = () => {
    setShowAddPersonUI(!showAddPersonUI);
  };

  const removeItem = (id) => {
    const oldPeople = state.people;
    const newFavourites = removePersonFromFavourites(id, state.favourites);
    let newPeople = oldPeople.filter((person) => person.id !== id);
    removeDataFromIDBStore('userDatabase', '1', 'people', id);
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { people: newPeople, favourites: newFavourites },
    });
    setShowBackground(false);
  };

  const selectPersonHandler = (id) => {
    setShowBackground(true);
    if (currentPersonID !== id && showUI) {
      setCurrentPersonID(id);
    }
  };

  const toggleAddPersonUIHandlerForLargerScreen = () => {
    setShowAddPersonUI(!showAddPersonUI);
  };

  const keyHandler = (e) => {
    if (e.key === 'Escape') {
      setCurrentPersonID(null);
      setShowBackground(false);
    }
  };

  useEffect(() => {
    if (currentPersonID) {
      window.addEventListener('keyup', keyHandler);
    } else {
      window.removeEventListener('keyup', keyHandler);
    }
  });

  return (
    <>
      {state.isModalOpen && (
        <Modal isTimePassed={isTimePassed} setIsTimePassed={setIsTimePassed} />
      )}
      {showDeletePersonDialog && (
        <DeletePersonDialog
          setShowDeletePersonDialog={setShowDeletePersonDialog}
          removeItem={removeItem}
          deletionUserID={deletionUserID}
        />
      )}
      <ul className="person-list">
        {personList.map((person) => (
          <Person
            key={person.id}
            person={person}
            removeItemHandler={removeItemHandler}
            currentPersonID={currentPersonID}
            setCurrentPersonID={setCurrentPersonID}
            selectPersonHandler={selectPersonHandler}
            setShowBackground={setShowBackground}
          />
        ))}
        {(showAddPersonUI && (
          <AddPersonUI showAddPersonUIHandler={showAddPersonUIHandler} />
        )) || (
          <EmptyBox
            toggleAddPersonUIHandlerForLargerScreen={
              toggleAddPersonUIHandlerForLargerScreen
            }
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
