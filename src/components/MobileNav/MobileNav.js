import AddPersonUI from '../AddPersonUI/AddPersonUI';
import { useState, useContext } from 'react';
import './MobileNav.scss';
import Modal from './Modal';
import { AppContext } from '../../context/AppContext/AppContext';
import SortingInput from '../SortingInput/SortingInput';

function MobileNav() {
  const { state, favState, showAddPersonUIState, backgroundState } = useContext(
    AppContext
  );
  const [showAddPersonUI, setShowAddPersonUI] = showAddPersonUIState;
  const [showSortingInput, setShowSortingInput] = useState(false);
  const [showFavourites, setShowFavourites] = favState;
  const [showBackground, setShowBackground] = backgroundState;

  const showAddPersonUIHandler = () => {
    console.log(backgroundState);
    setShowBackground(!showBackground);
    setShowAddPersonUI(!showAddPersonUI);
  };
  return (
    <>
      {state.isModalOpen && <Modal />}
      <nav className="mobile-nav">
        <button
          className="mobile-nav__add-btn mobile-nav__add-btn--side"
          onClick={() => setShowSortingInput(!showSortingInput)}
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
      {showSortingInput && (
        <SortingInput
          setShowSortingInput={() => setShowSortingInput(!showSortingInput)}
        />
      )}
    </>
  );
}

export default MobileNav;
