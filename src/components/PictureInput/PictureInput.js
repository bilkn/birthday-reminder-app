import { useContext } from 'react';
import validatePicture from '../../helper/validatePicture';
import { AppContext } from '../../context/AppContext/AppContext';
import './PictureInput.scss';
function PictureInput({ setDidUserUploadPicture, setCurrentPicture }) {
  const { dispatch } = useContext(AppContext);
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
          className="fas fa-camera picture-input-container__icon"
          aria-hidden={true}
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