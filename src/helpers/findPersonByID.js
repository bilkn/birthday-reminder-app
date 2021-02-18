function findPersonByID(people, id) {
  return people.find((person) => person.id === id);
}

export default findPersonByID;
