import './Person.scss';
import createFileURL from '../../helper//createFileURL';
import PersonOptions from '../PersonOptions/PersonOptions';
import { arrayBufferToBlob } from '../../utils/IndexedDB/indexedDBManagement';
import { useEffect, useState } from 'react';
import getPersonAge from '../../helper/getPersonAge';
function Person(props) {
  const {
    person,
    handleDeletePerson,
    currentPersonID,
    setCurrentPersonID,
    selectPersonHandler,
  } = props;
  const { id, name, birthday, picture } = person;
  const [optionsBtnStyle, setOptionsBtnStyle] = useState(null);
  const [pictureURL, setPictureURL] = useState(null);
  const [parentClass, setParentClass] = useState('');
  const [personAge, setPersonAge] = useState(null);
  const [tabindex, setTabindex] = useState(-1);
  useEffect(() => {
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

    setPictureURL((oldState) => (oldState = pictureURL));
  }, [picture]);

  useEffect(() => {
    let parentClassName =
      currentPersonID === id ? 'person person--highlighted' : 'person';
    setParentClass(parentClassName);
  }, [currentPersonID, id]);

  useEffect(() => {
    setPersonAge(getPersonAge(person));
  }, [person]);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px)');
    if (mql.matches) setTabindex(0);
  }, [tabindex]);

  const handleClick = () => {
    const mql = window.matchMedia('(max-width: 768px)');
    if (mql.matches) selectPersonHandler(id);
  };

  const keyPressHandler = (e) => {
    console.log('key press');
    if (e.key === 'Enter') selectPersonHandler(id);
  };
  const handleMouseEnter = (e) => {
    console.log('Mouse enter');
    const target = e.target.closest('button');
    selectPersonHandler(id);
    const style = { height: '50px', width: '30px' };
    setOptionsBtnStyle(style);
    const handleMouseLeave = (e) => {
      const relatedTarget = e.relatedTarget;
      if (!relatedTarget.classList.contains('person-options-list__item')) {
        setCurrentPersonID(null);
        setOptionsBtnStyle(null);
        target.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
    target.addEventListener('mouseleave', handleMouseLeave);
  };

  return (
    <div
      className={parentClass}
      onKeyPress={keyPressHandler}
      onClick={handleClick}
      tabIndex={tabindex}
    >
      <button
        className="person__dropdown-btn"
        onMouseEnter={handleMouseEnter}
        style={optionsBtnStyle}
      >
        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
      </button>
      {currentPersonID === id && (
        <PersonOptions
          currentPersonID={currentPersonID}
          setCurrentPersonID={setCurrentPersonID}
          handleDeletePerson={handleDeletePerson}
        />
      )}
      <div className="person-img-container">
        <img
          className="person-img-container__img"
          src={pictureURL}
          alt={name}
        />
      </div>
      <div className="person-info">
        <p className="person-info__name">{name}</p>
        <p className="person-info__birthday">{birthday}</p>
      </div>
      <div className="person-age-container">
        <p className="person-age-container__title">Age:</p>
        <p className="person-age-container__age">{personAge}</p>
      </div>
    </div>
  );
}

export default Person;
