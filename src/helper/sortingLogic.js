import {
  testDateWithCommonFormat,
  testDateWithUncommonFormat,
} from './dateFormatValidations';
import reformatDateSeperator from './reformatDate';

function sortingLogic(args) {
  const {
    peopleList,
    dispatch,
    nextSort,
    setPeopleList,
    showFavourites,
  } = args;
  const people = peopleList;
  if (nextSort === 'sortByAge') {
    sortByAge(people, dispatch, setPeopleList, showFavourites);
  } else if (nextSort === 'sortByMonth') {
    sortByMonth(people, dispatch, setPeopleList, showFavourites);
  } else if (nextSort === 'sortByName') {
    sortByName(people, dispatch, setPeopleList, showFavourites);
  }
}

// People sorting could be merged into a single function in the future.
function sortByAge(oldPeople, dispatch, setPeopleList, showFavourites) {
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
  if (showFavourites) {
    const favouritePeople = sortedPeople.filter(
      (person) => person.inFavourites
    );
    setPeopleList(favouritePeople);
  } else {
    setPeopleList(sortedPeople);
  }
  dispatch({ type: 'SORT_PEOPLE_BY_AGE' });
}

function sortByMonth(oldPeople, dispatch, setPeopleList, showFavourites) {
  const sortedPeople = oldPeople.sort((prev, cur) => {
    let newPrevBirthday = prev.birthday.slice();
    let newCurBirthday = cur.birthday.slice();
    [newPrevBirthday, newCurBirthday] = validateAndReformatDate(
      newPrevBirthday,
      newCurBirthday
    );
    const [prevDay, prevMonth] = newPrevBirthday.split('.');
    const [curDay, curMonth] = newCurBirthday.split('.');
    const prevDatePoint = +prevDay + +prevMonth * 10;
    const curDatePoint = +curDay + +curMonth * 10;
    return curDatePoint - prevDatePoint;
  });
  if (showFavourites) {
    const favouritePeople = sortedPeople.filter(
      (person) => person.inFavourites
    );
    setPeopleList(favouritePeople);
  } else {
    setPeopleList(sortedPeople);
  }
  dispatch({ type: 'SORT_PEOPLE_BY_MONTH' });
}

function sortByName(oldPeople, dispatch, setPeopleList, showFavourites) {
  const sortedPeople = oldPeople.sort((prev, cur) => {
    const [prevName] = prev.name.toLowerCase();
    const [curName] = cur.name.toLowerCase();
    return prevName.charCodeAt(0) - curName.charCodeAt(0);
  });
  if (showFavourites) {
    const favouritePeople = sortedPeople.filter(
      (person) => person.inFavourites
    );
    setPeopleList(favouritePeople);
  } else {
    setPeopleList(sortedPeople);
  }
  dispatch({ type: 'SORT_PEOPLE_BY_NAME' });
}

function validateAndReformatDate(newPrevBirthday, newCurBirthday) {
  const { regex } = testDateWithUncommonFormat(newPrevBirthday);

  newPrevBirthday = testDateWithCommonFormat(newPrevBirthday).result
    ? newPrevBirthday
    : newPrevBirthday.replace(regex, '$5.$3.$1');

  newCurBirthday = testDateWithCommonFormat(newCurBirthday).result
    ? newCurBirthday
    : newCurBirthday.replace(regex, '$5.$3.$1');

  if (/-|\//.test(newPrevBirthday)) {
    newPrevBirthday = reformatDateSeperator(newPrevBirthday);
  }
  if (/-|\//.test(newCurBirthday)) {
    newCurBirthday = reformatDateSeperator(newCurBirthday);
  }
  return [newPrevBirthday, newCurBirthday];
}

export default sortingLogic;
