import './DarkBackground.scss';
import '../../context/AppContext/AppContext';
import { useEffect } from 'react';
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
