import { useRef, useContext } from 'react';
import './SearchBox.scss';
import { AppContext } from '../../context/AppContext/AppContext';
import PeopleListContext from '../../context/PeopleListContext/PeopleListContext';
import FilterPeopleByName from '../../helper/FilterPeopleByName';
import filterFavouritePeople from '../../helper/filterFavouritePeople';

function SearchBox({ setShowSearchBox }) {
  const { favState, state } = useContext(AppContext);
  const [, setPeopleList] = useContext(PeopleListContext);
  const [showFavourites] = favState;
  const searchInput = useRef(null);

  const changeHandler = async () => {
    const name = searchInput.current.value;
    displayPeople(name);
  };

  const displayPeople =  (name) => {

    let people = showFavourites
      ? filterFavouritePeople(state.people)
      : state.people;
    if (people) {
      const filteredPeople = FilterPeopleByName(people, name);
      setPeopleList(filteredPeople);
    } else {
      console.log('Data could not found!');
    }
  };

  const closeBtnClickHandler = async () => {
    let name = '';
    setShowSearchBox(false);
    displayPeople(name);
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
      <button className="search-box__close-btn" onClick={closeBtnClickHandler}>
        <i className="far fa-times-circle"></i>
      </button>
    </div>
  );
}

export default SearchBox;
