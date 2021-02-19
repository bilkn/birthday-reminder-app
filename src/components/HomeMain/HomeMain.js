import { useContext } from 'react';
import { AppContext } from '../../context/AppContext/AppContext';
import PeopleList from '../PeopleList/PeopleList';
import './HomeMain.scss';

function HomeMain(props) {
  const { setShowUI } = props;
  const { currentPersonID, setCurrentPersonID } = useContext(AppContext);

  return (
    <main className="home-main">
      <PeopleList
        currentPersonID={currentPersonID}
        setCurrentPersonID={setCurrentPersonID}
        setShowUI={setShowUI}
      />
    </main>
  );
}
export default HomeMain;
