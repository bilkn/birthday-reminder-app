import AddPersonUI from '../AddPersonUI/AddPersonUI';
import { useState, useContext } from 'react';
import './MobileNav.scss';
import Modal from './Modal';
import { PeopleContext } from '../../context/PeopleContext/PeopleContext';
import SortingInput from '../SortingInput/SortingInput';

function MobileNav() {
  const { state, favState } = useContext(PeopleContext);
  const [showAddPersonUI, setShowAddPersonUI] = useState(false);
  const [showSortingInput, setShowSortingInput] = useState(false);
  const [showFavourites, setShowFavourites] = favState;

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
          onClick={() => setShowAddPersonUI(!showAddPersonUI)}
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
        <AddPersonUI
          setShowAddPersonUI={() => setShowAddPersonUI(!showAddPersonUI)}
        />
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
