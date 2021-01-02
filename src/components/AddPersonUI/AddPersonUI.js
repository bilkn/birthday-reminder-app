import { useContext, useRef } from 'react';
import { PeopleContext } from '../PeopleContext/PeopleContext';
import './AddPersonUI.scss';
import blankImg from '../../assets/no-picture.png';
import Modal from "./Modal";
function AddPersonUI({ setShowAddPersonUI }) {
  const { state, dispatch } = useContext(PeopleContext);
  const nameContainer = useRef(null);
  const dateContainer = useRef(null);
  const addPerson = () => {
    let name = nameContainer.current.value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const birthday = dateContainer.current.value.split('-').reverse().join('.');
    const newPerson = {
      id: new Date().getTime().toString(),
      name: name,
      birthday: birthday,
      img: blankImg,
    };

    dispatch({ type: 'ADD_ITEM', payload: [...state.people, newPerson] });
  };
  return (
    <>
    {state.isModalOpen && < Modal />}

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
            addPerson();
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
