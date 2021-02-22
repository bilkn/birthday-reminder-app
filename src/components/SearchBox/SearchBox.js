import { useRef, useContext, useEffect } from 'react';
import './SearchBox.scss';
import { AppContext } from '../../context/AppContext/AppContext';
import PeopleListContext from '../../context/PeopleListContext/PeopleListContext';
import filterPeopleByName from '../../helpers/filterPeopleByName';
import filterFavouritePeople from '../../helpers/filterFavouritePeople';

function SearchBox({ setShowSearchBox }) {
  const { favState, state } = useContext(AppContext);

  const [, setPeopleList] = useContext(PeopleListContext);
  const [showFavourites] = favState;
  const searchInput = useRef(null);

  const handleChange = async () => {
    const name = searchInput.current.value;
    displayPeople(name);
  };

  const displayPeople = (name) => {
    let people = showFavourites
      ? filterFavouritePeople(state.people)
      : state.people;
    if (people) {
      const filteredPeople = filterPeopleByName(people, name);
      setPeopleList(filteredPeople);
    } else {
      console.log('Data could not found!');
    }
  };

  const handleSearchBoxClose = async () => {
    let name = '';
    setShowSearchBox(false);
    displayPeople(name);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleSearchBoxClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // !!! Fix this.
  return (
    <div className="search-box">
      <input
        className="search-box__search-input"
        type="search"
        placeholder="Search by name"
        onChange={handleChange}
        ref={searchInput}
        autoFocus
      />
      <button className="search-box__close-btn" aria-label="Search" onClick={handleSearchBoxClose} >
        <i className="far fa-times-circle"></i>
      </button>
    </div>
  );
}

export default SearchBox;
