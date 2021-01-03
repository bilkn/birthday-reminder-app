import { useState } from 'react';
import './AppHead.scss';
import SearchBox from '../SearchBox/SearchBox';

function AppHead() {
  const [showSearchBox, setShowSearchBox] = useState(false);

  return (
    <header className="app-head">
      <nav className="app-head-nav">
        {(showSearchBox && <SearchBox />) || (
          <button
            className="app-head-nav__search-btn"
            onClick={() => setShowSearchBox(!showSearchBox)}
          >
            <i className="fas fa-search"></i>
          </button>
        )}
      </nav>
    </header>
  );
}

export default AppHead;
