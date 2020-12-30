import {useState} from "react";
import data from "../../utils/data";
import Person from "../Person/Person";
import EmptyBox from "../EmptyBox/EmptyBox";

function PersonList() {
  const [people, setPeople] = useState(data);
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
