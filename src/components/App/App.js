import AppHead from '../AppHead/AppHead';
import HomeMain from '../HomeMain/HomeMain';
import MobileNav from '../MobileNav/MobileNav';
import { useReducer } from 'react';
import data from '../../utils/data';
import { PeopleContext } from '../PeopleContext/PeopleContext';
import {reducer} from "./reducer";

function App() {
  const defaultState = {
    people: data,
    isModalOpen: false,
    modalContext: '',
  };

  const [state, dispatch] = useReducer(reducer,  defaultState);
  
  return (
    <>
      <AppHead />
      <PeopleContext.Provider value={{ state: state, dispatch: dispatch }}>
        <HomeMain />
        <MobileNav />
      </PeopleContext.Provider>
    </>
  );
}

export default App;
