import { useContext, useState } from 'react';
import Person from '../Person/Person';
import EmptyBox from '../EmptyBox/EmptyBox';
import './PersonList.scss';
import { PeopleContext } from '../../context/PeopleContext/PeopleContext';
import DeletePersonDialog from '../DeletePersonDialog/DeletePersonDialog';
import { removeDataFromIDBStore } from '../../utils/IndexedDB/indexedDBManagement';

function PersonList() {
  const { state, dispatch, favState } = useContext(PeopleContext);
  const [showFavourites] = favState;
  const [showDeletePersonDialog, setShowDeletePersonDialog] = useState(false);
  const [deletionUserID, setDeletionUserID] = useState(null);
  const [currentPersonID, setCurrentPersonID] = useState(null);

  const personList = showFavourites ? state.favourites : state.people;
  const removeItemHandler = (e, id) => {
    e.stopPropagation();
    setShowDeletePersonDialog(true);
    setDeletionUserID(id);
  };

  const removeItem = (id) => {
    const oldPeople = state.people;
    const oldFavourites = state.favourites;
    let newPeople = oldPeople.filter((person) => person.id !== id);
    let newFavourites = oldFavourites.filter((person) => person.id !== id);
    removeDataFromIDBStore('userDatabase', '1', 'people', id);
    removeDataFromIDBStore('userDatabase', '1', 'favourites', id);
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { people: newPeople, favourites: newFavourites },
    });
  };

  const selectPersonHandler = (id) => {
    if (currentPersonID !== id) {
      setCurrentPersonID(id);
    }
  };

  return (
    <>
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
          />
        ))}
        <EmptyBox />
      </ul>
    </>
  );
}

export default PersonList;
