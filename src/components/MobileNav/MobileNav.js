import AddPersonUI from '../AddPersonUI/AddPersonUI';
import { useState, useContext } from 'react';
import './MobileNav.scss';
import Modal from './Modal';
import { PeopleContext } from '../PeopleContext/PeopleContext';
import SortingInput from '../SortingInput/SortingInput';

function MobileNav() {
  const [showAddPersonUI, setShowAddPersonUI] = useState(false);
  const [showSortingInput, setShowSortingInput] = useState(false);
  const { state } = useContext(PeopleContext);
  return (
    <>
      {state.isModalOpen && <Modal />}
      <nav className="mobile-nav">
        <button
          className="mobile-nav__add-btn mobile-nav__add-btn--side"
          onClick={() => setShowSortingInput(!showSortingInput)}
        >
          <i class="fas fa-sort-amount-down"></i>
        </button>
        <button
          className="mobile-nav__add-btn"
          onClick={() => setShowAddPersonUI(!showAddPersonUI)}
        >
          <i className="fas fa-plus"></i>
        </button>
        {/* WIP */}
        <button
          className="mobile-nav__add-btn mobile-nav__add-btn--side"
          onClick={() => setShowSortingInput(!showSortingInput)}
        >
          <i class="fas fa-star"></i>
        </button>
        {/* WIP */}
      </nav>
      {showAddPersonUI && (
        <AddPersonUI
          setShowAddPersonUI={() => setShowAddPersonUI(!showAddPersonUI)}
        />
      )}
      {showSortingInput && (
        <SortingInput
          setShowSortingInput={setShowSortingInput(!showSortingInput)}
        />
      )}
    </>
  );
}

export default MobileNav;
