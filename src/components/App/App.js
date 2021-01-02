import AppHead from '../AppHead/AppHead';
import HomeMain from '../HomeMain/HomeMain';
import MobileNav from '../MobileNav/MobileNav';
import { useState } from 'react';
import data from '../../utils/data';
import { PeopleContext } from '../PeopleContext/PeopleContext';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <>
      <AppHead />
      <PeopleContext.Provider value={{people:people, setPeople: setPeople}}>
        <HomeMain />
        <MobileNav />
      </PeopleContext.Provider>
    </>
  );
}

export default App;
