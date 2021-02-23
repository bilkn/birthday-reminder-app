import AppHead from '../AppHead/AppHead';
import HomeMain from '../HomeMain/HomeMain';
import MobileNav from '../MobileNav/MobileNav';
import DarkBackground from '../DarkBackground/DarkBackground';
import PeopleListProvider from '../../providers/PeopleListProvider';
import AppProvider from '../../providers/AppProvider';
import ScreenProvider from '../../providers/ScreenProvider';
function App() {
  return (
    <>
      <AppProvider>
        <DarkBackground />
        <PeopleListProvider>
          <ScreenProvider>
            <AppHead />
            <HomeMain />
          </ScreenProvider>
          <MobileNav />
        </PeopleListProvider>
      </AppProvider>
    </>
  );
}

export default App;
