import { useContext, useRef } from 'react';
import { PeopleContext } from '../PeopleContext/PeopleContext';
import './AddPersonUI.scss';
import blankImg from '../../assets/no-picture.png';

function AddPersonUI({ setShowAddPersonUI }) {
  const { state, dispatch } = useContext(PeopleContext);
  const nameContainer = useRef(null);
  const dateContainer = useRef(null);
  const validatePersonInfo = (name) => {
    if (name.length <= 0) return 'name';
    return true;
  };
  const addPersonHandler = () => {
    let name = nameContainer.current.value;
    if (typeof validatePersonInfo(name) === 'boolean') {
      name = name.charAt(0).toUpperCase() + name.slice(1);
      const date = dateContainer.current.value;
      const birthday = transformTheDate(date);
      const newPerson = createNewPerson(name, birthday);
      dispatch({ type: 'ADD_ITEM', payload: [...state.people, newPerson] });
    } else {
      console.log('wrong');
    }
  };

  const createNewPerson = (name, birthday) => {
    const newPerson = {
      id: new Date().getTime().toString(),
      name: name,
      birthday: birthday,
      img: blankImg,
    };
    return newPerson;
  };

  const transformTheDate = (date) => {
    const birthday = date.split('-').reverse().join('.');
    return birthday;
  };

  return (
    <>
      <div className="add-person-ui">
        <div className="person-img-container">
          <img className="person-img-container__img" src="#" alt="Empty" />
        </div>

        <div className="add-person-ui-input-container">
          <input
            type="text"
            className="add-person-ui-input-container__name"
            ref={nameContainer}
            maxLength="20"
          />
          <input
            type="date"
            className="add-person-ui-input-container__birthday"
            ref={dateContainer}
          />
        </div>
        <div className="add-person-ui-controls">
          <button
            className="add-person-ui-controls__add-btn"
            onClick={() => {
              addPersonHandler();
              setShowAddPersonUI();
            }}
          >
            <i
              className="fa fa-plus-circle add-person-ui-controls__icon"
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default AddPersonUI;
