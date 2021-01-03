import { useRef, useContext } from 'react';
import './SearchBox.scss';
import { PeopleContext } from '../PeopleContext/PeopleContext';
import defaulState from '../App/defaultState';
function SearchBox({ setShowSearchBox }) {
  const { state, dispatch } = useContext(PeopleContext);
  const searchInput = useRef(null);
  const changeHandler = () => {
    const name = searchInput.current.value;
    const people = defaulState.people;
    filterByName(people, dispatch, name);
  };
  return (
    <div className="search-box">
      <input
        className="search-box__search-input"
        type="search"
        placeholder="Search by name"
        onChange={changeHandler}
        ref={searchInput}
      />
      <button
        className="search-box__close-btn"
        onClick={() => {
          setShowSearchBox(false);
        }}
      >
        <i className="far fa-times-circle"></i>
      </button>
    </div>
  );
}

function filterByName(people, dispatch, name) {
  const filteredPeople = people.filter((person) => {
    const personName = person.name.toLowerCase();
    name = name.toLowerCase();
    return personName.includes(name);
  });
  dispatch({ type: 'FILTER_PEOPLE_BY_NAME', payload: filteredPeople });
}

export default SearchBox;
