import './DarkBackground.scss';
import '../../context/AppContext/AppContext';
function DarkBackground(props) {
  const {
    showBackground,
    setShowBackground,
    currentPersonID,
    setCurrentPersonID,
  } = props;
  const backgroundHandler = (e) => {
    if (currentPersonID) {
      e.stopPropagation();
      setShowBackground(false);
      setCurrentPersonID(null);
    }
  };
  const className = showBackground
    ? 'dark-background dark-background--visible'
    : 'dark-background';
  return <div className={className} onClick={backgroundHandler}></div>;
}

export default DarkBackground;
