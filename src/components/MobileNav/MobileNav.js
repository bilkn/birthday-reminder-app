import { useContext } from 'react';
import './MobileNav.scss';
import { AppContext } from '../../context/AppContext/AppContext';
import sortingLogic from '../../helpers/sortingLogic';
import PeopleListContext from '../../context/PeopleListContext/PeopleListContext';
import handleSorting from '../../helpers/handleSorting';

function MobileNav() {
  const {
    dispatch,
    favState,
    showAddPersonUIState,
    backgroundState,
    sortingState,
  } = useContext(AppContext);
  const [showAddPersonUI, setShowAddPersonUI] = showAddPersonUIState;
  const [showFavourites, setShowFavourites] = favState;
  const [showBackground, setShowBackground] = backgroundState;
  const [sortState, setSortState] = sortingState;
  const [peopleList, setPeopleList] = useContext(PeopleListContext);

  const toggleAddPersonUI = () => {
    setShowBackground(!showBackground);
    setShowAddPersonUI(!showAddPersonUI);
  };
  const handleSortingClick = () => {
    const nextSort = handleSorting(sortState);
    const args = {
      peopleList,
      setPeopleList,
      nextSort,
      showFavourites,
      dispatch,
    };
    sortingLogic(args);
    setSortState(nextSort);
  };

  return (
    <>
      <nav className="mobile-nav">
        <button
          className="mobile-nav__btn mobile-nav__btn--side"
          aria-label="Sort people list"
          onClick={handleSortingClick}
        >
          <i className="fas fa-sort-amount-down"></i>
        </button>
        <button
          className="mobile-nav__btn"
          aria-label="Add person"
          onClick={toggleAddPersonUI}
        >
          <i className="fas fa-plus"></i>
        </button>

        <button
          className="mobile-nav__btn mobile-nav__btn--side"
          aria-label="Toggle favourites"
          onClick={() => setShowFavourites(!showFavourites)}
        >
          <i className="fas fa-star"></i>
        </button>
      </nav>
    </>
  );
}

export default MobileNav;
