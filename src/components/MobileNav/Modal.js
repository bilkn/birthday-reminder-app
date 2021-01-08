import { useContext, useEffect } from 'react';
import { PeopleContext } from '../../context/PeopleContext/PeopleContext';
import './Modal.scss';

function Modal() {
  const { state, dispatch } = useContext(PeopleContext);
  const clearModal = () => {
    dispatch({ type: 'REMOVE_MODAL' });
  };
  useEffect(() => {
    setTimeout(() => clearModal(), 2000);
  });
  return <p className="modal">{state.modalContent}</p>;
}

export default Modal;
