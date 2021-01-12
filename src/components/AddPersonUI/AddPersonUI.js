import { useContext, useRef, useState } from 'react';
import { AppContext } from '../../context/AppContext/AppContext';
import './AddPersonUI.scss';
import blankImg from '../../assets/no-picture.png';
import { putItemToIDB } from '../../utils/IndexedDB/indexedDBManagement';
import PictureInput from '../PictureInput/PictureInput';
import getFileURL from '../../helper/createFileURL';
import validatePersonData from '../../helper/validatePersonData';
import reformatData from '../../helper/reformatDate';
import AddPersonUIControls from '../AddPersonUIControls/AddPersonUIControls';
import AddPersonUIINfo from '../AddPersonUIInfo/AddPersonUIInfo';

function AddPersonUI({ showAddPersonUIHandler }) {
  const { state, dispatch } = useContext(AppContext);
  const [didUserUploadPicture, setDidUserUploadPicture] = useState(false);
  const [currentPicture, setCurrentPicture] = useState(null);
  const nameContainer = useRef(null);
  const dateContainer = useRef(null);

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
        showAddPersonUIHandler();
        break;
    }
  };

  const addPerson = (name, date, picture) => {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const birthday = reformatData(date);
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
            currentPicture={currentPicture}
            setCurrentPicture={setCurrentPicture}
          />
        )}
        <AddPersonUIINfo
          nameContainer={nameContainer}
          dateContainer={dateContainer}
        />
        <AddPersonUIControls addPersonHandler={addPersonHandler} />
      </div>
    </>
  );
}

export default AddPersonUI;
