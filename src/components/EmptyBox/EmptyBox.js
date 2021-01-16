import './EmptyBox.scss';
function EmptyBox({ toggleAddPersonUIHandlerForLargerScreen }) {
  return (
    <div
      className="empty-box"
      tabIndex={1}
      onClick={toggleAddPersonUIHandlerForLargerScreen}
    >
      <div className="empty-box__icon-container">
        <i className="fa fa-plus empty-box__add-icon" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default EmptyBox;
