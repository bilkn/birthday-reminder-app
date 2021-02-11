import './EmptyBox.scss';
function EmptyBox({ toggleAddPersonUIHandlerForLargerScreen }) {
  const handleClick = (e) => {
    toggleAddPersonUIHandlerForLargerScreen(e);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') toggleAddPersonUIHandlerForLargerScreen(e);
  };
  return (
    <div
      className="empty-box"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className="empty-box__icon-container">
        <i className="fa fa-plus empty-box__add-icon" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default EmptyBox;
