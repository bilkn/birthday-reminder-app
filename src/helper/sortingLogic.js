import reformatDateSeperator from './reformatDate';

function sortingLogic({ state, dispatch, sortState }) {
  const people = state.people;
  if (sortState === 'sortByAge') {
    sortByAge(people, dispatch);
  } else if (sortState === 'sortByMonth') {
    sortByMonth(people, dispatch);
  } else if (sortState === 'sortByName') {
    sortByName(people, dispatch);
  }
}

// People sorting could be merged into a single function in the future.
function sortByAge(oldPeople, dispatch) {
  const sortedPeople = oldPeople.sort((prev, cur) => {
    let newPrevBirthday = prev.birthday.slice();
    let newCurBirthday = cur.birthday.slice();
    [newPrevBirthday, newCurBirthday] = validateAndReformatDate(
      newPrevBirthday,
      newCurBirthday
    );
    const [prevDay, prevMonth, prevYear] = newPrevBirthday.split('.');
    const [curDay, curMonth, curYear] = newCurBirthday.split('.');
    const prevDateInMs = new Date(prevYear, prevMonth, prevDay).getTime();
    const curDateInMs = new Date(curYear, curMonth, curDay).getTime();
    return prevDateInMs - curDateInMs;
  });

  dispatch({
    type: 'SORT_PEOPLE_BY_AGE',
    payload: sortedPeople,
  });
}

function sortByMonth(oldPeople, dispatch) {
  const sortedPeople = oldPeople.sort((prev, cur) => {
    let newPrevBirthday = prev.birthday.slice();
    let newCurBirthday = cur.birthday.slice();
    [newPrevBirthday, newCurBirthday] = validateAndReformatDate(
      newPrevBirthday,
      newCurBirthday
    );
    const [prevDay, prevMonth] = prev.birthday.split('.');
    const [curDay, curMonth] = cur.birthday.split('.');
    const prevDatePoint = +prevDay + +prevMonth * 10;
    const curDatePoint = +curDay + +curMonth * 10;
    return prevDatePoint - curDatePoint;
  });

  dispatch({ type: 'SORT_PEOPLE_BY_MONTH', payload: sortedPeople });
}

function sortByName(oldPeople, dispatch) {
  const sortedPeople = oldPeople.sort((prev, cur) => {
    const [prevName] = prev.name;
    const [curName] = cur.name;
    return prevName.charCodeAt(0) - curName.charCodeAt(0);
  });

  dispatch({ type: 'SORT_PEOPLE_BY_NAME', payload: sortedPeople });
}

function validateAndReformatDate(newPrevBirthday, newCurBirthday) {
  if (newPrevBirthday.slice(0, 4) >= 12) {
    newPrevBirthday.reverse();
  }
  if (newCurBirthday.slice(0, 4) >= 12) {
    newCurBirthday.reverse();
  }
  if (/-|\//.test(newPrevBirthday)) {
    newPrevBirthday = reformatDateSeperator(newPrevBirthday);
  }
  if (/-|\//.test(newCurBirthday)) {
    newCurBirthday = reformatDateSeperator(newCurBirthday);
  }
  return [newPrevBirthday, newCurBirthday];
}

export default sortingLogic;
