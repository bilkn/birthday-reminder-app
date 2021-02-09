import { useContext } from 'react';
import { AppContext } from '../../context/AppContext/AppContext';
import './DeletePersonDialog.scss';
function DeletePersonDialog(props) {
  const {
    setShowDeletePersonDialog,
    removeItem,
    deletionUserID,
    setCurrentPersonID,
  } = props;
  const deleteBtnClickHandler = (e) => {
    e.stopPropagation();
    const btnText = e.target.textContent;
    if (btnText === 'Yes') {
      removeItem(deletionUserID);
    }

    setShowDeletePersonDialog(false);
    setShowBackground(false);
    setCurrentPersonID(false);
  };
  const context = useContext(AppContext);
  const { backgroundState } = context;
  const [, setShowBackground] = backgroundState;
  return (
    <div className="delete-person-dialog">
      <p className="delete-person-dialog__text">
        Are you really want to delete this person?
      </p>
      <div className="delete-person-dialog-controls">
        <button
          className="delete-person-dialog-controls__btn"
          onClick={deleteBtnClickHandler}
        >
          Yes
        </button>
        <button
          className="delete-person-dialog-controls__btn delete-person-dialog-controls__btn--no-margin"
          onClick={deleteBtnClickHandler}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default DeletePersonDialog;
