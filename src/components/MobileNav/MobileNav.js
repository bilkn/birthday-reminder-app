import AddPersonUI from '../AddPersonUI/AddPersonUI';
import { useState, useContext } from 'react';
import './MobileNav.scss';
import Modal from './Modal';
import { PeopleContext } from '../PeopleContext/PeopleContext';

function MobileNav() {
  const [showAddPersonUI, setShowAddPersonUI] = useState(false);
  const { state } = useContext(PeopleContext);
  return (
    <>
      {state.isModalOpen && <Modal />}
      <nav className="mobile-nav">
        <button
          className="mobile-nav__add-btn"
          onClick={() => setShowAddPersonUI(!showAddPersonUI)}
        >
          <i className="fas fa-plus"></i>
        </button>
      </nav>
      {showAddPersonUI && (
        <AddPersonUI
          setShowAddPersonUI={() => setShowAddPersonUI(!showAddPersonUI)}
        />
      )}
    </>
  );
}

export default MobileNav;
