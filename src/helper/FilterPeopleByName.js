function FilterPeopleByName(people, name, dispatch, showFavourites) {
  const filteredPeople = people.filter((person) => {
    const personName = person.name.toLowerCase();
    name = name.toLowerCase();
    return personName.includes(name);
  });

  const type = showFavourites
    ? 'FILTER_FAVOURITES_BY_NAME'
    : 'FILTER_PEOPLE_BY_NAME';

  dispatch({ type: type, payload: filteredPeople });
}



export default FilterPeopleByName;
