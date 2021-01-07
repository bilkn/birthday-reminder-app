import { useContext } from 'react';
import validatePicture from '../../utils/helpers/validatePicture';
import { PeopleContext } from '../PeopleContext/PeopleContext';

function PictureInput({ setDidUserUploadPicture, setCurrentPicture }) {
  const { dispatch } = useContext(PeopleContext);
  const fileInputHandler = (e) => {
    const picture = e.target.files[0];
    if (validatePicture(picture)) {
      setDidUserUploadPicture(true);
      setCurrentPicture(picture);
    } else {
      dispatch({ type: 'INVALID_FILE_TYPE' });
    }
  };
  return (
    <div className="add-person-ui-picture-container">
      <label
        htmlFor="picture"
        className="add-person-ui-picture-container__label"
      >
        <i className="fa fa-plus-circle" aria-hidden="true"></i>
      </label>
      <input
        id="picture"
        type="file"
        className="add-person-ui-picture-container__picture"
        accept="image/png, image/jpeg"
        onChange={fileInputHandler}
        hidden={true}
      ></input>
    </div>
  );
}

export default PictureInput;
