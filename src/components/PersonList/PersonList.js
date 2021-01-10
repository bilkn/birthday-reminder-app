import { useContext, useState } from 'react';
import Person from '../Person/Person';
import EmptyBox from '../EmptyBox/EmptyBox';
import './PersonList.scss';
import { AppContext } from '../../context/AppContext/AppContext';
import DeletePersonDialog from '../DeletePersonDialog/DeletePersonDialog';
import { removeDataFromIDBStore } from '../../utils/IndexedDB/indexedDBManagement';
import removePersonFromFavourites from '../../helper/removePersonFromFavourites';

function PersonList(props) {
  const { currentPersonID, setCurrentPersonID, showUI } = props;
  const { state, dispatch, favState } = useContext(AppContext);
  const [showFavourites] = favState;
  const [showDeletePersonDialog, setShowDeletePersonDialog] = useState(false);
  const [deletionUserID, setDeletionUserID] = useState(null);

  const personList = showFavourites ? state.favourites : state.people;
  const removeItemHandler = (e, id) => {
    e.stopPropagation();
    setShowDeletePersonDialog(true);
    setDeletionUserID(id);
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
  };

  const selectPersonHandler = (id) => {
    console.log(id, showUI);
    if (currentPersonID !== id && showUI) {
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
