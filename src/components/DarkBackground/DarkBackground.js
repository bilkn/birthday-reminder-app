import './DarkBackground.scss';
import { AppContext } from '../../context/AppContext/AppContext';
import { useEffect, useContext } from 'react';
function DarkBackground(props) {
  const { showAddPersonUIState } = useContext(AppContext);
  const [showAddPersonUI, setShowAddPersonUI] = showAddPersonUIState;
  const {
    showBackground,
    setShowBackground,
    currentPersonID,
    setCurrentPersonID,
  } = props;
  const backgroundHandler = (e) => {
    if (currentPersonID || showAddPersonUI) {
      e.stopPropagation();
      setShowBackground(false);
      setCurrentPersonID(null);
      setShowAddPersonUI(false);
    }
  };
  useEffect(() => {
    showBackground
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'initial');
  }, [showBackground]);
  const className = showBackground
    ? 'dark-background dark-background--visible'
    : 'dark-background';
  return <div className={className} onClick={backgroundHandler}></div>;
}

export default DarkBackground;
