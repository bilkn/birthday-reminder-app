import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext/AppContext';
import './Modal.scss';

function Modal({ isTimePassed, setIsTimePassed }) {
  const { state, dispatch } = useContext(AppContext);

  const clearModal = () => {
    dispatch({ type: 'REMOVE_MODAL' });
  };

  useEffect(() => {
    if (isTimePassed) {
      setIsTimePassed(false);
      setTimeout(modalHandler, 2000);
    }
  });
  const modalHandler = () => {
    clearModal();
    setIsTimePassed(true);
  };
  return <p className="modal">{state.modalContent}</p>;
}

export default Modal;
