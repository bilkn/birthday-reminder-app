import { useContext } from 'react';
import Person from '../Person/Person';
import EmptyBox from '../EmptyBox/EmptyBox';
import './PersonList.scss';
import { PeopleContext } from '../PeopleContext/PeopleContext';
import removeDataFromLocalStorage from '../Logic/removeDataFromLocalStorage';

function PersonList() {
  const { state, dispatch } = useContext(PeopleContext);
  const removeItem = (id) => {
    const oldPeople = state.people;
    let newPeople = oldPeople.filter((person) => person.id !== id);
    removeDataFromLocalStorage('data', id);
    dispatch({ type: 'REMOVE_ITEM', payload: newPeople });
  };

  return (
    <ul className="person-list">
      {state.people.map((person) => (
        <Person key={person.id} person={person} removeItem={removeItem} />
      ))}
      <EmptyBox />
    </ul>
  );
}

export default PersonList;
