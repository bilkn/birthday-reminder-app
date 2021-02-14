import { useContext } from 'react';
import { AppContext } from '../../context/AppContext/AppContext';
import findPersonByID from '../../helper/findPersonByID';
import './DeletePersonDialog.scss';
function DeletePersonDialog(props) {
  const {
    setShowDeletePersonDialog,
    removeItem,
    deletionUserID,
    setCurrentPersonID,
  } = props;
  const { backgroundState, state } = useContext(AppContext);
  const [, setShowBackground] = backgroundState;
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

  return (
    <div className="delete-person-dialog">
      <p className="delete-person-dialog__text">
        {` Are you really want to delete ${
          findPersonByID(state.people, deletionUserID).name
        }?`}
      </p>
      <div className="delete-person-dialog-controls">
        <button
          className="delete-person-dialog-controls__btn"
          onClick={deleteBtnClickHandler}
          autoFocus
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
