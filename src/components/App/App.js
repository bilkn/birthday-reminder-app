import AppHead from '../AppHead/AppHead';
import HomeMain from '../HomeMain/HomeMain';
import MobileNav from '../MobileNav/MobileNav';
import { useEffect, useReducer, useState } from 'react';
import { PeopleContext } from '../../context/PeopleContext/PeopleContext';
import { reducer } from '../../utils/reducer';
import defaultState from '../../utils/defaultState';

function App() {
  const def = {
    people: [],
    isModalOpen: false,
    modalContent: '',
    favourites: [],
  };

  const [state, dispatch] = useReducer(reducer, def);
  const [showFavourites, setShowFavourites] = useState(false);
  const favState = [showFavourites, setShowFavourites];
  const getInitialData = async () => {
    const data = await defaultState();
    const people = data.people;
    const favourites = data.favourites;
    dispatch({ type: 'INITIAL_LOAD', payload: {people: people, favourites: favourites} });
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <>
      <PeopleContext.Provider
        value={{ state: state, dispatch: dispatch, favState }}
      >
        <AppHead />
        <HomeMain />
        <MobileNav />
      </PeopleContext.Provider>
    </>
  );
}

export default App;
