import AddPersonUI from '../AddPersonUI/AddPersonUI';
import { useState, useContext } from 'react';
import './MobileNav.scss';
import { AppContext } from '../../context/AppContext/AppContext';
import sortingLogic from '../../helper/sortingLogic';
import PeopleListContext from '../../context/PeopleListContext/PeopleListContext';

function MobileNav() {
  const {
    state,
    dispatch,
    favState,
    showAddPersonUIState,
    backgroundState,
  } = useContext(AppContext);
  const [showAddPersonUI, setShowAddPersonUI] = showAddPersonUIState;
  const [showFavourites, setShowFavourites] = favState;
  const [showBackground, setShowBackground] = backgroundState;
  const [sortState, setSortState] = useState('sortByAge');
  const [peopleList, setPeopleList] = useContext(PeopleListContext);
  const showAddPersonUIHandler = () => {
    setShowBackground(!showBackground);
    setShowAddPersonUI(!showAddPersonUI);
  };

  const sortingClickHandler = () => {
    switch (sortState) {
      case 'sortByAge':
        setSortState('sortByName');
        break;
      case 'sortByName':
        setSortState('sortByMonth');
        break;
      case 'sortByMonth':
        setSortState('sortByAge');
        break;
      default:
        break;
    }
    sortingLogic({ state, dispatch, sortState, setPeopleList, showFavourites });
  };
  return (
    <>
      <nav className="mobile-nav">
        <button
          className="mobile-nav__add-btn mobile-nav__add-btn--side"
          onClick={sortingClickHandler}
        >
          <i className="fas fa-sort-amount-down"></i>
        </button>
        <button
          className="mobile-nav__add-btn"
          onClick={showAddPersonUIHandler}
        >
          <i className="fas fa-plus"></i>
        </button>

        <button
          className="mobile-nav__add-btn mobile-nav__add-btn--side"
          onClick={() => setShowFavourites(!showFavourites)}
        >
          <i className="fas fa-star"></i>
        </button>
      </nav>
      {showAddPersonUI && (
        <AddPersonUI showAddPersonUIHandler={showAddPersonUIHandler} />
      )}
    </>
  );
}

export default MobileNav;
