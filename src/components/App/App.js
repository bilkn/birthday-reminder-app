import AppHead from '../AppHead/AppHead';
import HomeMain from '../HomeMain/HomeMain';
import MobileNav from '../MobileNav/MobileNav';
import { useEffect, useReducer } from 'react';
import { PeopleContext } from '../../context/PeopleContext/PeopleContext';
import { reducer } from '../../utils/reducer';
import defaultState from '../../utils/defaultState';

function App() {
  const def = {
    people: [],
    isModalOpen: false,
    modalContent: '',
  };
  const [state, dispatch] = useReducer(reducer, def);
  const getInitialData = async () => {
    const data = await defaultState();
    const people = data.people;
    dispatch({ type: 'INITIAL_LOAD', payload: people });
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <>
      <PeopleContext.Provider value={{ state: state, dispatch: dispatch }}>
        <AppHead />
        <HomeMain />
        <MobileNav />
      </PeopleContext.Provider>
    </>
  );
}

export default App;
