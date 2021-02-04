import AddPersonUIInfo from '../AddPersonUIInfo/AddPersonUIInfo';
import EditPersonUIControls from '../EditPersonUIControls/EditPersonUIControls';
import PictureInput from '../PictureInput/PictureInput';
import { useContext, useRef, useState } from 'react';
import { AppContext } from '../../context/AppContext/AppContext';
import findPersonByID from '../../helper/findPersonByID';
import './EditPersonUI.scss';
import { putItemToIDB } from '../../utils/IndexedDB/indexedDBManagement';
import blankImg from '../../assets/no-picture.png';
import PersonImgContainer from '../PersonImgContainer/PersonImgContainer';
import createFileURL from '../../helper/createFileURL';
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
  const handleAcceptClick = (e) => {
    e.stopPropagation();
    const newName = nameContainer.current.value;
    const newBirthday = dateContainer.current.value;
    const editedPerson = createEditedPerson(
      newName,
      newBirthday,
      currentPicture || blankImg
    );
    const filteredPeople = state.people.filter(
      (person) => person.id !== currentPersonIDForEdit
    );
    const newPeople = [...filteredPeople, editedPerson];
    const newFavourites = changeEditedPersonFromFavourites(editedPerson);
    putItemToIDB(editedPerson, 'userDatabase', '1', 'people');
    putItemToIDB(editedPerson, 'userDatabase', '1', 'favourites');
    dispatch({
      type: 'EDIT_PERSON',
      payload: {
        people: newPeople,
        favourites: newFavourites || state.favourites,
      },
    });
    
    setShowBackground(false);
    setShowEditPersonUI(false);
  };

  const changeEditedPersonFromFavourites = (editedPerson) => {
    let newFavourites = null;
    if (findPersonByID(state.favourites, currentPersonIDForEdit)) {
      const filteredFavourites = state.favourites.filter(
        (person) => person.id !== currentPersonIDForEdit
      );
      newFavourites = [...filteredFavourites, editedPerson];
      return newFavourites;
    }
  };

  const createEditedPerson = (name, birthday, picture) => {
    const editedPerson = {
      id: currentPersonIDForEdit,
      name: name,
      birthday: birthday,
      picture: picture,
    };
    return editedPerson;
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
