import { useContext, useRef } from 'react';
import { PeopleContext } from '../PeopleContext/PeopleContext';
import './SortingInput.scss';
function SortingInput() {
  const { state, dispatch } = useContext(PeopleContext);
  const selectBox = useRef(null);
  const changeHandler = () => {
    const value = selectBox.current.value;
    if (value === 'sort_by_age') {
      sortByAge(state, dispatch);
    } else if (value === 'sort_by_month') {
      sortByMonth(state, dispatch);
    } else if (value === 'sort_by_name') {
      sortByName(state, dispatch);
    }
  };
  return (
    <select
      onChange={() => changeHandler(state, dispatch)}
      className="sorting-input"
      ref={selectBox}
    >
      <option className="sorting-input__option" value="sort_by_age">
        Sort by age
      </option>

      <option className="sorting-input__option" value="sort_by_month">
        Sort by month
      </option>
      <option className="sorting-input__option" value="sort_by_name">
        Sort by name
      </option>
    </select>
  );
}

// People sorting could be merged into a single function in the future.
function sortByAge(state, dispatch) {
  const oldPeople = state.people;
  const sortedPeople = oldPeople.sort((prev, cur) => {
    const [prevDay, prevMonth, prevYear] = prev.birthday.split('.');
    const [curDay, curMonth, curYear] = cur.birthday.split('.');
    const prevDateInMs = new Date(prevYear, prevMonth, prevDay).getTime();
    const curDateInMs = new Date(curYear, curMonth, curDay).getTime();
    return prevDateInMs - curDateInMs;
  });
  dispatch({ type: 'SORT_PEOPLE_BY_AGE', payload: sortedPeople });
}

function sortByMonth(state, dispatch) {
  const oldPeople = state.people;
  const sortedPeople = oldPeople.sort((prev, cur) => {
    const [prevDay, prevMonth] = prev.birthday.split('.');
    const [curDay, curMonth] = cur.birthday.split('.');
    const prevDatePoint = +prevDay + +prevMonth * 10;
    const curDatePoint = +curDay + +curMonth * 10;
    return prevDatePoint - curDatePoint;
  });
  dispatch({ type: 'SORT_PEOPLE_BY_MONTH', payload: sortedPeople });
}

function sortByName(state, dispatch) {
  const oldPeople = state.people;
  const sortedPeople = oldPeople.sort((prev, cur) => {
    const [prevName] = prev.name;
    const [curName] = cur.name;
    return prevName.charCodeAt(0) - curName.charCodeAt(0);
  });
  dispatch({ type: 'SORT_PEOPLE_BY_NAME', payload: sortedPeople });
}

export default SortingInput;
