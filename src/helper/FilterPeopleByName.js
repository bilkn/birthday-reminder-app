function FilterPeopleByName(people, name) {
  const filteredPeople = people.filter((person) => {
    const personName = person.name.toLowerCase();
    name = name.toLowerCase();
    return personName.includes(name);
  });
  return filteredPeople;
}

export default FilterPeopleByName;
