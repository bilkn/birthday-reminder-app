import AddPersonUIInfo from '../AddPersonUIInfo/AddPersonUIInfo';
import EditPersonUIControls from '../EditPersonUIControls/EditPersonUIControls';
import PictureInput from '../PictureInput/PictureInput';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext/AppContext';
import findPersonByID from '../../helper/findPersonByID';
import './EditPersonUI.scss';
function EditPersonUI({ currentPersonID }) {
  const { state } = useContext(AppContext);
  const person = findPersonByID(state.people, currentPersonID);
  return (
    <div className="edit-person-ui">
      <PictureInput />
      <AddPersonUIInfo
        name={person.name}
        birthday={person.birthday}
        currentPersonID={currentPersonID}
      />
      <EditPersonUIControls />
    </div>
  );
}

export default EditPersonUI;
