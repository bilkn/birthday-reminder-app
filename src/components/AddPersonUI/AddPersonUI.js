import { useContext, useRef, useState } from 'react';
import { PeopleContext } from '../PeopleContext/PeopleContext';
import './AddPersonUI.scss';
import blankImg from '../../assets/no-picture.png';
import { putItemToIDB } from '../../utils/IndexedDB/indexedDBManagement';
import PictureInput from '../PictureInput/PictureInput';
import getFileURL from '../../utils/getFileURL';
import validatePicture from "../../utils/helpers/validatePicture.js"

function AddPersonUI({ setShowAddPersonUI }) {
  const { state, dispatch } = useContext(PeopleContext);
  const [didUserUploadPicture, setDidUserUploadPicture] = useState(false);
  const [currentPicture, setCurrentPicture] = useState(null);
  const nameContainer = useRef(null);
  const dateContainer = useRef(null);

  const validatePersonData = (name, date, picture) => {
    if (name.length <= 0) return 'INVALID_NAME';
    else if (date.length !== 10) return 'INVALID_DATE';
    else if (!validatePicture(picture)) return 'INVALID_FILE_TYPE';
    return true;
  };

  const addPersonHandler = () => {
    let name = nameContainer.current.value;
    const date = dateContainer.current.value;
    const picture = currentPicture || blankImg;
    const validationResult = validatePersonData(name, date, picture);

    switch (validationResult) {
      case 'INVALID_NAME':
      case 'INVALID_DATE':
      case 'INVALID_FILE_TYPE':
        dispatch({ type: validationResult });
        break;
      default:
        addPerson(name, date, picture);
        setShowAddPersonUI();
        break;
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
      picture: picture,
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
            currentPicture= {currentPicture}
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
