import './AddPersonUILarge.scss';
function AddPersonUILarge({ handleAddPersonUIForLargerScreen }) {
  const handleClick = (e) => {
    handleAddPersonUIForLargerScreen(e);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAddPersonUIForLargerScreen(e);
  };
  return (
    <li
      className="add-person-ui-large"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className="add-person-ui-large__icon-container">
        <i className="fa fa-plus add-person-ui-large__add-icon" aria-hidden="true"></i>
      </div>
    </li>
  );
}

export default AddPersonUILarge;
