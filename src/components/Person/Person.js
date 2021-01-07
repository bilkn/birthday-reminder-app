import './Person.scss';
import '../../utils/getFileURL';
import getFileURL from '../../utils/getFileURL';
function Person({ person, removeItemHandler }) {
  const { id, name, birthday, picture } = person;
  const validateAndConvertFileToURL = (picture) =>
    picture instanceof File ? getFileURL(picture) : picture;

  return (
    <div className="person">
      <div className="person-img-container">
        <img className="person-img-container__img" src={validateAndConvertFileToURL(picture)} alt={name} />
      </div>
      <div className="person-info">
        <p className="person-info__name">{name}</p>
        <p className="person-info__birthday">{birthday}</p>
      </div>
      <div className="person-controls">
        <button
          className="person-controls__remove-btn"
          onClick={() => {
            removeItemHandler(id);
          }}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Person;
