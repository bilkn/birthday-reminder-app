function sortingLogic({ state, dispatch, sortState, showFavourites }) {
  const people = (showFavourites && state.favourites) || state.people;
  if (sortState === 'sortByAge') {
    sortByAge(people, dispatch, showFavourites);
  } else if (sortState === 'sortByMonth') {
    sortByMonth(people, dispatch, showFavourites);
  } else if (sortState === 'sortByName') {
    sortByName(people, dispatch, showFavourites);
  }
}

// People sorting could be merged into a single function in the future.
function sortByAge(oldPeople, dispatch, showFavourites) {
  const sortedPeople = oldPeople.sort((prev, cur) => {
    const [prevDay, prevMonth, prevYear] = prev.birthday.split('.');
    const [curDay, curMonth, curYear] = cur.birthday.split('.');
    const prevDateInMs = new Date(prevYear, prevMonth, prevDay).getTime();
    const curDateInMs = new Date(curYear, curMonth, curDay).getTime();
    return prevDateInMs - curDateInMs;
  });
  if (showFavourites) {
    dispatch({ type: 'SORT_FAVOURITES_BY_AGE', payload: sortedPeople });
  } else {
    dispatch({
      type: 'SORT_PEOPLE_BY_AGE',
      payload: sortedPeople,
    });
  }
}

function sortByMonth(oldPeople, dispatch, showFavourites) {
  const sortedPeople = oldPeople.sort((prev, cur) => {
    const [prevDay, prevMonth] = prev.birthday.split('.');
    const [curDay, curMonth] = cur.birthday.split('.');
    const prevDatePoint = +prevDay + +prevMonth * 10;
    const curDatePoint = +curDay + +curMonth * 10;
    return prevDatePoint - curDatePoint;
  });
  if (showFavourites) {
    dispatch({ type: 'SORT_FAVOURITES_BY_MONTH', payload: sortedPeople });
  } else {
    dispatch({ type: 'SORT_PEOPLE_BY_MONTH', payload: sortedPeople });
  }
}

function sortByName(oldPeople, dispatch, showFavourites) {
  const sortedPeople = oldPeople.sort((prev, cur) => {
    const [prevName] = prev.name;
    const [curName] = cur.name;
    return prevName.charCodeAt(0) - curName.charCodeAt(0);
  });
  if (showFavourites) {
    dispatch({ type: 'SORT_FAVOURITES_BY_NAME', payload: sortedPeople });
  } else {
    dispatch({ type: 'SORT_PEOPLE_BY_NAME', payload: sortedPeople });
  }
}

export default sortingLogic;
