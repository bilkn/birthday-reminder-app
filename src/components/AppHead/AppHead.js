import { useContext, useState } from 'react';
import './AppHead.scss';
import SearchBox from '../SearchBox/SearchBox';
import { AppContext } from '../../context/AppContext/AppContext';
function AppHead() {
  const { favState } = useContext(AppContext);
  const [showFavourites, setShowFavourites] = favState;
  const [showSearchBox, setShowSearchBox] = useState(false);

  return (
    <header className="app-head">
        <h1 className="app-head__logo">BirthdayApp</h1>
      <nav className="app-head-nav">
        {(showSearchBox && (
          <SearchBox setShowSearchBox={setShowSearchBox} />
        )) || (
          <button
            className="app-head-nav__search-btn"
            onClick={() => setShowSearchBox(!showSearchBox)}
          >
            <i className="fas fa-search app-head-nav__icon"></i>
          </button>
        )}
        <button
          className="app-head-nav__fav-btn"
          onClick={() => !setShowFavourites(!showFavourites)}
        >
          <i className="fa fa-star app-head-nav__icon" aria-hidden="true"></i>
        </button>
      </nav>
    </header>
  );
}

export default AppHead;
