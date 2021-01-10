import PersonList from '../PersonList/PersonList';
import './HomeMain.scss';

function HomeMain({ showUI, setShowUI, currentPersonID, setCurrentPersonID }) {
  return (
    <main className="home-main">
      <PersonList
        currentPersonID={currentPersonID}
        setCurrentPersonID={setCurrentPersonID}
        showUI={showUI}
        setShowUI={setShowUI}
      />
    </main>
  );
}
export default HomeMain;
