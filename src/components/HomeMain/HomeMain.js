import { useContext } from 'react';
import { AppContext } from '../../context/AppContext/AppContext';
import PersonList from '../PersonList/PersonList';
import './HomeMain.scss';

function HomeMain(props) {
  const { setShowUI } = props;
  const { currentPersonID, setCurrentPersonID } = useContext(AppContext);

  return (
    <main className="home-main">
      <PersonList
        currentPersonID={currentPersonID}
        setCurrentPersonID={setCurrentPersonID}
        setShowUI={setShowUI}
      />
    </main>
  );
}
export default HomeMain;
