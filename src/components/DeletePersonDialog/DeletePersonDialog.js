import "./DeletePersonDialog.scss";
function DeletePersonDialog({
  setShowDeletePersonDialog,
  removeItem,
  deletionUserID,
}) {
  const deleteBtnClickHandler = (e) => {
    const btnText = e.target.textContent;
    if (btnText === 'Yes') {
      removeItem(deletionUserID);
    }
    setShowDeletePersonDialog(false);
  };
  return (
    <div className="delete-person-dialog">
      <p>Are you really want to delete this person?</p>
      <button
        className="delete-person-dialog__btn"
        onClick={deleteBtnClickHandler}
      >
        Yes
      </button>
      <button
        className="delete-person-dialog__btn"
        onClick={deleteBtnClickHandler}
      >
        No
      </button>
    </div>
  );
}

export default DeletePersonDialog;
