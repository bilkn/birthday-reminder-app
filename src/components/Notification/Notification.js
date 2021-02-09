import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext/AppContext';
import './Notification.scss';

function Notification({ isTimePassed, setIsTimePassed }) {
  const { state, dispatch } = useContext(AppContext);

  const clearNotification = () => {
    dispatch({ type: 'REMOVE_MODAL' });
  };

  useEffect(() => {
    if (isTimePassed) {
      setIsTimePassed(false);
      setTimeout(notificationHandler, 2500);
    }
  });
  const notificationHandler = () => {
    clearNotification();
    setIsTimePassed(true);
  };
  return <p className="notification">{state.notificationContent}</p>;
}

export default Notification;
