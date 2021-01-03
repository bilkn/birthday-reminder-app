import { useContext } from 'react';
import { PeopleContext } from '../PeopleContext/PeopleContext';
import './SortingInput.scss';
function SortingInput() {
  const { state, dispatch } = useContext(PeopleContext);
  return (
    <select className="sorting-input">
      <optgroup>
        <option
          onClick={() => sortByDate(state, dispatch)}
          className="sorting-input-option"
          value="sort_by_date"
        >
          Sort by date
        </option>
      </optgroup>
    </select>
  );
}

function sortByDate(state, dispatch) {
  console.log(state);
}

export default SortingInput;
