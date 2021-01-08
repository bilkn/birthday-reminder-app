import './Person.scss';
import createFileURL from '../../helper//createFileURL';
function Person({ person, removeItemHandler }) {
  const { id, name, birthday, picture } = person;
  
  const getURL = () => {
    let pictureURL = null;
    try {
      pictureURL = createFileURL(picture);
    } catch (err) {
      console.log(err);
      pictureURL = picture;
    }
    return pictureURL;
  };

  return (
    <div className="person">
      <div className="person-img-container">
        <img
          className="person-img-container__img"
          src={getURL()}
          alt={name}
        />
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
