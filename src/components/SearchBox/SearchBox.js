import { useRef, useContext } from 'react';
import './SearchBox.scss';
import { AppContext } from '../../context/AppContext/AppContext';
import { getDataFromIDBStore } from '../../utils/IndexedDB/indexedDBManagement';
import FilterPeopleByName from '../../helper/FilterPeopleByName';

function SearchBox({ setShowSearchBox }) {
  const { dispatch, favState } = useContext(AppContext);
  const [showFavourites] = favState;
  const searchInput = useRef(null);

  const changeHandler = async () => {
    const name = searchInput.current.value;
    let people = null;
    if (showFavourites) {
      people = await getDataFromIDBStore('userDatabase', '1', 'favourites');
    } else {
      people = await getDataFromIDBStore('userDatabase', '1', 'people');
    }
    if (people) {
      FilterPeopleByName(people, name, dispatch, showFavourites);
    } else {
      console.log('Data could not found!');
    }
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

export default SearchBox;
