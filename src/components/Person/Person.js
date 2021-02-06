import './Person.scss';
import createFileURL from '../../helper//createFileURL';
import PersonOptions from '../PersonOptions/PersonOptions';
import { arrayBufferToBlob } from '../../utils/IndexedDB/indexedDBManagement';
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
      if (typeof picture !== 'string') {
        const blob = arrayBufferToBlob(picture);
        pictureURL = createFileURL(blob);
      } else {
        pictureURL = picture;
      }
    } catch (err) {
      console.log(err);
    }
    return pictureURL;
  };
  let parentClassName =
    currentPersonID === id ? 'person person--highlighted' : 'person';
  const keyPressHandler = (e) => {
    if (e.key === 'Enter' && !currentPersonID) selectPersonHandler(id);
  };

  const handleMouseOver = () => {
    selectPersonHandler(id);
  };

  return (
    <div
      className={parentClassName}
      onKeyPress={(e) => keyPressHandler(e)}
      onClick={() => selectPersonHandler(id)}
      tabIndex={1}
    >
      <button className="person__options-btn" onMouseOver={handleMouseOver}>
        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
      </button>
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
          onClick={(e) => {
            removeItemHandler(e, id);
          }}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Person;
