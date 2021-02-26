import { useEffect, useReducer, useState } from 'react';
import { AppContext } from '../context/AppContext/AppContext';
import defaultState from '../utils/defaultState';
import { reducer } from '../utils/reducer';

function AppProvider(props) {
  // Default state.
  const def = {
    people: [],
    isNotificationOpen: false,
    notificationContent: '',
  };
  const [state, dispatch] = useReducer(reducer, def);
  const [currentPersonID, setCurrentPersonID] = useState(null);
  const showAddPersonUIState = useState(false);
  const showEditPersonUIState = useState(false);
  const backgroundState = useState(false);
  const favState = useState(false);
  const sortingState = useState('sortByName');
  
  const getInitialData = async () => {
    try {
      const data = await defaultState();
      const { people } = data;
      dispatch({
        type: 'INITIAL_LOAD',
        payload: { people: people },
      });
    } catch (err) {
      console.log(err);
    }
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
        sortingState,
      }}
      {...props}
    />
  );
}

export default AppProvider;
