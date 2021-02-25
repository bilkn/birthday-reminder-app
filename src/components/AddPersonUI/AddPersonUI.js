import { useContext, useRef, useState } from 'react';
import { AppContext } from '../../context/AppContext/AppContext';
import './AddPersonUI.scss';
import blankImg from '../../assets/no-picture.png';
import {
  putItemToIDB,
  blobToArrayBuffer,
} from '../../utils/IndexedDB/indexedDBManagement';
import PictureInput from '../PictureInput/PictureInput';
import createFileURL from '../../helpers/createFileURL';
import validatePersonData from '../../helpers/validatePersonData';
import AddPersonUIControls from '../AddPersonUIControls/AddPersonUIControls';
import AddPersonUIINfo from '../AddPersonUIInfo/AddPersonUIInfo';
import PersonImgContainer from '../PersonImgContainer/PersonImgContainer';
function AddPersonUI({ setShowBackground, toggleAddPersonUI }) {
  const { state, dispatch } = useContext(AppContext);
  const [didUserUploadPicture, setDidUserUploadPicture] = useState(false);
  const [currentPicture, setCurrentPicture] = useState(null);
  const nameContainer = useRef(null);
  const dateContainer = useRef(null);

  const handleAddPerson = async () => {
    const name = nameContainer.current.value;
    const date = dateContainer.current.value;
    let picture = null;
    try {
       picture = currentPicture
        ? await blobToArrayBuffer(currentPicture)
        : blankImg;
    } catch (err) {
      console.log(err);
    }
    const validationResult = validatePersonData(name, date, picture);

    switch (validationResult) {
      case 'INVALID_NAME':
      case 'INVALID_DATE':
      case 'INVALID_DAY':
      case 'INVALID_MONTH':
      case 'INVALID_YEAR':
      case 'INVALID_FILE_TYPE':
        dispatch({ type: validationResult });
        break;
      default:
        addPerson(name, date, picture);
        toggleAddPersonUI();
        setShowBackground(false);
        break;
    }
  };

  const addPerson = (name, birthday, picture) => {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const newPerson = createNewPerson(name, birthday, picture);
    dispatch({ type: 'ADD_PERSON', payload: [...state.people, newPerson] });
    try {
      putItemToIDB(newPerson, 'userDatabase', '1', 'people');
    } catch (err) {
      console.log(err);
    }
  };

  const createNewPerson = (name, birthday, picture) => {
    const newPerson = {
      id: new Date().getTime().toString(),
      name: name,
      birthday: birthday,
      picture: picture,
      inFavourites: false,
    };
    return newPerson;
  };

  return (
    <>
      <div className="add-person-ui">
        {didUserUploadPicture ? (
          <PersonImgContainer
            createFileURL={createFileURL}
            currentPicture={currentPicture}
            nameContainer={nameContainer}
          />
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
        <AddPersonUIControls handleAddPerson={handleAddPerson} />
        <button
          className="add-person-ui__close-btn"
          onClick={toggleAddPersonUI}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </>
  );
}

export default AddPersonUI;
