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
      {/* WIP */}
      <option className="sorting-input__option" value="sort_by_date">
        Sort by date
      </option>
      {/* WIP */}
    </select>
  );
}

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
  console.log(sortedPeople);
}

export default SortingInput;
