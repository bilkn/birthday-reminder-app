import AppHead from '../AppHead/AppHead';
import HomeMain from '../HomeMain/HomeMain';
import MobileNav from '../MobileNav/MobileNav';
import { useReducer } from 'react';
import { PeopleContext } from '../PeopleContext/PeopleContext';
import { reducer } from './reducer';
import defaultState from './defaultState';


function App() {
 

  const [state, dispatch] = useReducer(reducer, defaultState);
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
