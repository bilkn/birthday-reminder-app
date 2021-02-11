import { useEffect, useReducer, useState } from 'react';
import { AppContext } from '../context/AppContext/AppContext';
import defaultState from '../utils/defaultState';
import { reducer } from '../utils/reducer';

function AppProvider(props) {
  const def = {
    people: [],
    isNotificationOpen: false,
    notificationContent: '',
  };
  const [state, dispatch] = useReducer(reducer, def);
  const [showFavourites, setShowFavourites] = useState(false);
  const [currentPersonID, setCurrentPersonID] = useState(null);
  const [showBackground, setShowBackground] = useState(false);
  const [showAddPersonUI, setShowAddPersonUI] = useState(false);
  const [showEditPersonUI, setShowEditPersonUI] = useState(false);
  const showAddPersonUIState = [showAddPersonUI, setShowAddPersonUI];
  const showEditPersonUIState = [showEditPersonUI, setShowEditPersonUI];
  const backgroundState = [showBackground, setShowBackground];
  const favState = [showFavourites, setShowFavourites];
  // Default state.
  const getInitialData = async () => {
    const data = await defaultState();
    const people = data.people;

    dispatch({
      type: 'INITIAL_LOAD',
      payload: { people: people },
    });
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        favState,
        backgroundState,
        showAddPersonUIState,
        showEditPersonUIState,
        currentPersonID,
        setCurrentPersonID,
      }}
      {...props}
    />
  );
}

export default AppProvider;
