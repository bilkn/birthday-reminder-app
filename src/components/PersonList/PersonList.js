import { useContext } from 'react';
import Person from '../Person/Person';
import EmptyBox from '../EmptyBox/EmptyBox';
import './PersonList.scss';
import { PeopleContext } from '../PeopleContext/PeopleContext';

function PersonList() {
  const { people, setPeople } = useContext(PeopleContext);
  const removeItem = (id) => {
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id);
      return newPeople;
    });
  };
  return (
    <ul className="person-list">
      {people.map((person) => (
        <Person key={person.id} person={person} removeItem={removeItem} />
      ))}
      <EmptyBox />
    </ul>
  );
}

export default PersonList;
