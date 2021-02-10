import AddPersonUIInfo from '../AddPersonUIInfo/AddPersonUIInfo';
import EditPersonUIControls from '../EditPersonUIControls/EditPersonUIControls';
import PictureInput from '../PictureInput/PictureInput';
import { useContext, useRef, useState } from 'react';
import { AppContext } from '../../context/AppContext/AppContext';
import findPersonByID from '../../helper/findPersonByID';
import './EditPersonUI.scss';
import {
  blobToArrayBuffer,
  putItemToIDB,
} from '../../utils/IndexedDB/indexedDBManagement';
import blankImg from '../../assets/no-picture.png';
import PersonImgContainer from '../PersonImgContainer/PersonImgContainer';
import createFileURL from '../../helper/createFileURL';
import validatePersonData from '../../helper/validatePersonData';
function EditPersonUI({
  currentPersonID,
  setShowEditPersonUI,
  setShowBackground,
}) {
  const defaultState = currentPersonID;
  const nameContainer = useRef(null);
  const dateContainer = useRef(null);
  const { state, dispatch } = useContext(AppContext);
  const [currentPersonIDForEdit] = useState(defaultState);
  const [currentPicture, setCurrentPicture] = useState(null);
  const [didUserUploadPicture, setDidUserUploadPicture] = useState(false);
  const person = findPersonByID(state.people, currentPersonIDForEdit);
  const handleAcceptClick = async (e) => {
    e.stopPropagation();
    const newName = nameContainer.current.value;
    const newBirthday = dateContainer.current.value;
    const picture = didUserUploadPicture ? currentPicture : person.picture;
    let editedPerson = null;
    try {
      editedPerson = await createEditedPerson(newName, newBirthday, picture);
    } catch (err) {
      console.log(err);
    }
    if (editedPerson) {
      const filteredPeople = state.people.filter(
        (person) => person.id !== currentPersonIDForEdit
      );

      const newPeople = [...filteredPeople, editedPerson];
      putItemToIDB(editedPerson, 'userDatabase', '1', 'people');
      dispatch({
        type: 'EDIT_PERSON',
        payload: {
          people: newPeople,
          name: editedPerson.name,
        },
      });
      setShowBackground(false);
      setShowEditPersonUI(false);
    } else {
      // !!! Add notification
      console.log('EDIT PERSON ERROR!');
    }
  };

  const createEditedPerson = async (name, birthday, picture) => {
    const editedPerson = {
      ...person,
      id: currentPersonIDForEdit,
      name: name,
      birthday: birthday,
      picture: picture,
    };
    picture = currentPicture
      ? await blobToArrayBuffer(currentPicture)
      : blankImg;
    const validationResult = validatePersonData(name, birthday, picture);
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
        return editedPerson;
    }
    return null;
  };

  return (
    <div className="edit-person-ui">
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

      <AddPersonUIInfo
        name={person.name}
        birthday={person.birthday}
        currentPersonID={currentPersonID}
        nameContainer={nameContainer}
        dateContainer={dateContainer}
      />
      <EditPersonUIControls handleAcceptClick={handleAcceptClick} />
    </div>
  );
}

export default EditPersonUI;
