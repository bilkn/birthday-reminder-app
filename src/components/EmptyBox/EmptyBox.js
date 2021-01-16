import './EmptyBox.scss';
function EmptyBox({ showAddPersonUIHandlerForLargerScreen }) {
  return (
    <div
      className="empty-box"
      tabIndex={1}
      onClick={showAddPersonUIHandlerForLargerScreen}
    >
      <button className="empty-box__add-btn" tabIndex={-1}>
        <i className="fa fa-plus empty-box__add-icon" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default EmptyBox;
