import { useContext } from 'react';
import './MobileNav.scss';
import { AppContext } from '../../context/AppContext/AppContext';
import sortingLogic from '../../helper/sortingLogic';
import PeopleListContext from '../../context/PeopleListContext/PeopleListContext';
import handleSorting from '../../helper/handleSorting';

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
    console.log(sortState, 'mobile nav');
    const nextSort = handleSorting(sortState, setSortState);
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
          onClick={handleSortingClick}
        >
          <i className="fas fa-sort-amount-down"></i>
        </button>
        <button className="mobile-nav__btn" onClick={toggleAddPersonUI}>
          <i className="fas fa-plus"></i>
        </button>

        <button
          className="mobile-nav__btn mobile-nav__btn--side"
          onClick={() => setShowFavourites(!showFavourites)}
        >
          <i className="fas fa-star"></i>
        </button>
      </nav>
    </>
  );
}

export default MobileNav;
