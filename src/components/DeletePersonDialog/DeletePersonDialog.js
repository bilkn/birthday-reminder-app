function DeletePersonWarning({ setShowWarning, removeItem, deletionUserID }) {
  const deleteBtnClickHandler = (e) => {
    const btnText = e.target.textContent;
    if (btnText === 'Yes') {
      removeItem(deletionUserID);
    }
    setShowWarning(false);
  };
  return (
    <div className="delete-person-warning">
      <p>Are you really want to delete this person?</p>
      <button
        className="delete-person-warning__btn"
        onClick={deleteBtnClickHandler}
      >
        Yes
      </button>
      <button
        className="delete-person-warning__btn"
        onClick={deleteBtnClickHandler}
      >
        No
      </button>
    </div>
  );
}

export default DeletePersonWarning;
