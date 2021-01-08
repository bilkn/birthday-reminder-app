import './Person.scss';
import createFileURL from '../../helper//createFileURL';
import PersonOptions from '../PersonOptions/PersonOptions';

function Person(props) {
  const {
    person,
    removeItemHandler,
    currentPersonID,
    setCurrentPersonID,
    selectPersonHandler,
  } = props;
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
    <div className="person" onClick={() => selectPersonHandler(id)}>
      {currentPersonID === id && (
        <PersonOptions
          currentPersonID={currentPersonID}
          setCurrentPersonID={setCurrentPersonID}
        />
      )}
      <div className="person-img-container">
        <img className="person-img-container__img" src={getURL()} alt={name} />
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
