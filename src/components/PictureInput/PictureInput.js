function PictureInput({ setDidUserUploadPicture, setCurrentPicture }) {
  const fileInputHandler = (e) => {
    setDidUserUploadPicture(true);
    const picture = e.target.files[0];
    setCurrentPicture(picture);
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
