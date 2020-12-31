import './MobileNav.scss';
function MobileNav({ state, callback }) {
  return (
    <nav className="mobile-nav">
      <button className="mobile-nav__add-btn" onClick={() => callback(!state)}>
        <i className="fas fa-plus"></i>
      </button>
    </nav>
  );
}

export default MobileNav;
