import { useContext, useRef, useState } from 'react';
import { PeopleContext } from '../PeopleContext/PeopleContext';
import './AddPersonUI.scss';
import blankImg from '../../assets/no-picture.png';
import { putItemToIDB } from '../../utils/IndexedDB/indexedDBManagement';
import PictureInput from '../PictureInput/PictureInput';
import getFileURL from '../../utils/getFileURL';

function AddPersonUI({ setShowAddPersonUI }) {
  const { state, dispatch } = useContext(PeopleContext);
  const [didUserUploadPicture, setDidUserUploadPicture] = useState(false);
  const [currentPicture, setCurrentPicture] = useState(null);
  const nameContainer = useRef(null);
  const dateContainer = useRef(null);

  const validatePersonInfo = (name, date) => {
    if (name.length <= 0) return 'INVALID_NAME';
    else if (date.length !== 10) return 'INVALID_DATE';
    return true;
  };

  const addPersonHandler = () => {
    let name = nameContainer.current.value;
    const date = dateContainer.current.value;
    const validationResult = validatePersonInfo(name, date);
    if (typeof validationResult === 'boolean') {
      addPerson(name, date, currentPicture);
    } else if (validationResult === 'INVALID_NAME') {
      dispatch({ type: 'INVALID_NAME' });
    } else if (validationResult === 'INVALID_DATE') {
      dispatch({ type: 'INVALID_DATE' });
    }
  };

  const addPerson = (name, date, picture) => {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const birthday = transformTheDate(date);
    const newPerson = createNewPerson(name, birthday, picture);
    dispatch({ type: 'ADD_ITEM', payload: [...state.people, newPerson] });
    putItemToIDB(newPerson, 'userDatabase', '1', 'people');
  };

  const createNewPerson = (name, birthday, picture) => {
    const newPerson = {
      id: new Date().getTime().toString(),
      name: name,
      birthday: birthday,
      picture: picture || blankImg,
    };
    return newPerson;
  };

  const transformTheDate = (date) => {
    const birthday = date.split('-').reverse().join('.');
    return birthday;
  };

  return (
    <>
      <div className="add-person-ui">
        {didUserUploadPicture ? (
          <div className="person-img-container">
            <img
              className="person-img-container__img"
              src={getFileURL(currentPicture)}
              alt={nameContainer.current.value}
            />
          </div>
        ) : (
          <PictureInput
            setDidUserUploadPicture={setDidUserUploadPicture}
            setCurrentPicture={setCurrentPicture}
          />
        )}
        <div className="add-person-ui-info-container">
          <input
            type="text"
            className="add-person-ui-info-container__name"
            ref={nameContainer}
            maxLength="15"
          />
          <input
            type="date"
            className="add-person-ui-info-container__birthday"
            ref={dateContainer}
          />
        </div>
        <div className="add-person-ui-controls">
          <button
            className="add-person-ui-controls__add-btn"
            onClick={() => {
              addPersonHandler();
              setShowAddPersonUI();
            }}
          >
            <i
              className="fa fa-plus-circle add-person-ui-controls__icon"
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default AddPersonUI;
