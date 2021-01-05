import { useContext, useState } from 'react';
import Person from '../Person/Person';
import EmptyBox from '../EmptyBox/EmptyBox';
import './PersonList.scss';
import { PeopleContext } from '../PeopleContext/PeopleContext';
import removeDataFromLocalStorage from '../Logic/removeDataFromLocalStorage';
import DeletePersonDialog from '../DeletePersonDialog/DeletePersonDialog';

function PersonList() {
  const { state, dispatch } = useContext(PeopleContext);
  const [showDeletePersonDialog, setShowDeletePersonDialog] = useState(false);
  const [deletionUserID, setDeletionUserID] = useState(null);

  const removeItemHandler = (id) => {
    setShowDeletePersonDialog(true);
    setDeletionUserID(id);
  };

  const removeItem = (id) => {
    const oldPeople = state.people;
    let newPeople = oldPeople.filter((person) => person.id !== id);
    removeDataFromLocalStorage('data', id);
    dispatch({ type: 'REMOVE_ITEM', payload: newPeople });
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
        {state.people.map((person) => (
          <Person
            key={person.id}
            person={person}
            removeItemHandler={removeItemHandler}
          />
        ))}
        <EmptyBox />
      </ul>
    </>
  );
}

export default PersonList;
