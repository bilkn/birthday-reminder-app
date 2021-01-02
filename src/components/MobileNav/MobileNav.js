import AddPersonUI from '../AddPersonUI/AddPersonUI';
import { useState } from 'react';
import './MobileNav.scss';
function MobileNav() {
    const [showAddPersonUI, setShowAddPersonUI] = useState(false);
  return (
    <>
      <nav className="mobile-nav">
        <button
          className="mobile-nav__add-btn"
          onClick={() => setShowAddPersonUI(!showAddPersonUI)}
        >
          <i className="fas fa-plus"></i>
        </button>
      </nav>
      {showAddPersonUI && (
        <AddPersonUI setShowAddPersonUI={() => setShowAddPersonUI(!showAddPersonUI)} />
      )}
    </>
  );
}

export default MobileNav;
