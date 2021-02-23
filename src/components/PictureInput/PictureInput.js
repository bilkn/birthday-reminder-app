import { useContext, useEffect, useRef } from 'react';
import validatePicture from '../../helpers/validatePicture';
import { AppContext } from '../../context/AppContext/AppContext';
import './PictureInput.scss';
function PictureInput({ setDidUserUploadPicture, setCurrentPicture }) {
  const { dispatch } = useContext(AppContext);
  const label = useRef(null);

  const handleFile = (e) => {
    const picture = e.target.files[0];
    if (validatePicture(picture)) {
      setDidUserUploadPicture(true);
      setCurrentPicture(picture);
    } else {
      dispatch({ type: 'INVALID_FILE_TYPE' });
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') label.current.click();
  };

  useEffect(() => {
    label.current.focus();
  }, []);

  return (
    <div className="picture-input-container">
      <label
        htmlFor="picture"
        className="picture-input-container__label"
        tabIndex={0}
        ref={label}
        onKeyDown={onKeyDown}
      >
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
        onChange={handleFile}
        hidden={true}
      ></input>
    </div>
  );
}

export default PictureInput;
