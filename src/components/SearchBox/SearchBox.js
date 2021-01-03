import { useRef } from 'react';
import './SearchBox.scss';
function SearchBox() {
  const searchInput = useRef(null);
  const changeHandler = () => {};
  return (
    <div className="search-box">
      <input
        className="search-box__search-input"
        type="search"
        placeholder="Search by name"
        onChange={changeHandler}
        ref={searchInput}
      />
      <button className="search-box__close-btn">
        <i class="far fa-times-circle"></i>
      </button>
    </div>
  );
}

export default SearchBox;
