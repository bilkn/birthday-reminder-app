import './AddPersonUIControls.scss';
function AddPersonUIControls({ handleAddPerson }) {
  return (
    <div className="add-person-ui-controls">
      <button
        className="add-person-ui-controls__add-btn"
        onClick={() => {
          handleAddPerson();
        }}
      >
        <i
          className="fa fa-plus-circle add-person-ui-controls__icon"
          aria-hidden="true"
        ></i>
      </button>
    </div>
  );
}

export default AddPersonUIControls;
