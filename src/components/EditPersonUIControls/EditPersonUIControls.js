import './EditPersonUIControls.scss';
function EditPersonUIControls() {
  return (
    <div className="edit-person-ui-controls">
      <button className="edit-person-ui-controls__accept-btn">
        <i
          className="fas fa-check-circle edit-person-ui-controls__icon"
          aria-hidden={true}
        ></i>
      </button>
    </div>
  );
}

export default EditPersonUIControls;
