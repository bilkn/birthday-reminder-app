import { useContext } from 'react';
import validatePicture from '../../utils/helpers/validatePicture';
import { PeopleContext } from '../../utils/../utils/PeopleContext/PeopleContext';
import './PictureInput.scss';
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
    <div className="picture-input-container">
      <label htmlFor="picture" className="picture-input-container__label">
        <i
          className="fa fa-plus picture-input-container__icon"
          aria-hidden="true"
        ></i>
      </label>
      <input
        id="picture"
        type="file"
        className="picture-input-container__picture"
        accept="image/png, image/jpeg"
        onChange={fileInputHandler}
        hidden={true}
      ></input>
    </div>
  );
}

export default PictureInput;
