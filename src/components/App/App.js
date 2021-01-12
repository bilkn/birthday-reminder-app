import AppHead from '../AppHead/AppHead';
import HomeMain from '../HomeMain/HomeMain';
import MobileNav from '../MobileNav/MobileNav';
import { useEffect, useReducer, useState } from 'react';
import { AppContext } from '../../context/AppContext/AppContext';
import { reducer } from '../../utils/reducer';
import defaultState from '../../utils/defaultState';
import DarkBackground from '../DarkBackground/DarkBackground';
function App() {
  // Default state.
  const def = {
    people: [],
    isModalOpen: false,
    modalContent: '',
    favourites: [],
  };

  const [state, dispatch] = useReducer(reducer, def);
  const [showFavourites, setShowFavourites] = useState(false);
  const [showUI, setShowUI] = useState(true);
  const [currentPersonID, setCurrentPersonID] = useState(null);
  const [showBackground, setShowBackground] = useState(false);
  const [showAddPersonUI, setShowAddPersonUI] = useState(false);
  const [showEditPersonUI, setShowEditPersonUI] = useState(false);
  const showAddPersonUIState = [showAddPersonUI, setShowAddPersonUI];
  const showEditPersonUIState = [showEditPersonUI, setShowEditPersonUI];
  const backgroundState = [showBackground, setShowBackground];
  const favState = [showFavourites, setShowFavourites];
  
  const getInitialData = async () => {
    const data = await defaultState();
    const people = data.people;
    const favourites = data.favourites;

    dispatch({
      type: 'INITIAL_LOAD',
      payload: { people: people, favourites: favourites },
    });
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{
          state: state,
          dispatch: dispatch,
          favState,
          backgroundState,
          showAddPersonUIState,
          showEditPersonUIState
        }}
      >
        <DarkBackground
          showBackground={showBackground}
          setShowBackground={setShowBackground}
          currentPersonID={currentPersonID}
          setCurrentPersonID={setCurrentPersonID}
        />
        <AppHead />
        <HomeMain
          showUI={showUI}
          setShowUI={setShowUI}
          currentPersonID={currentPersonID}
          setCurrentPersonID={setCurrentPersonID}
        />
        <MobileNav />
      </AppContext.Provider>
    </>
  );
}

export default App;
