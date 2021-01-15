import { useContext, useEffect } from 'react';
import { AppContext } from "../../context/AppContext/AppContext";
import './Modal.scss';

function Modal() {
  const { state, dispatch } = useContext(AppContext);
  const clearModal = () => {
    dispatch({ type: 'REMOVE_MODAL' });
  };
  useEffect(() => {
    setTimeout(() => clearModal(), 2000);
  });
  return <p className="modal">{state.modalContent}</p>;
}

export default Modal;
