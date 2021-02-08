import './PersonOptions.scss';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext/AppContext';
import findPersonByID from '../../helper/findPersonByID';
import {
  putItemToIDB,
  removeDataFromIDBStore,
} from '../../utils/IndexedDB/indexedDBManagement';

function PersonOptions(props) {
  const { currentPersonID, setCurrentPersonID, handleDeletePerson } = props;
  const {
    state,
    dispatch,
    backgroundState,
    showEditPersonUIState,
  } = useContext(AppContext);
  const person = findPersonByID(state.people, currentPersonID);
  const [, setShowBackground] = backgroundState;
  const [, setShowEditPersonUI] = showEditPersonUIState;
  const isPersonInFavourites = () => {
    // Prevents the person from being added to favourites again.
    return state.favourites.some((person) => person.id === currentPersonID);
  };

  const editHandler = (e) => {
    e.stopPropagation();
    setShowBackground(true);
    setShowEditPersonUI(true);
    setTimeout(() => setCurrentPersonID(null), 0);
  };

  const addToFavoritesHandler = () => {
    dispatch({
      type: 'ADD_FAVOURITE',
      payload: [...state.favourites, person],
    });
    putItemToIDB(person, 'userDatabase', '1', 'favourites');
    setCurrentPersonID(null);
  };

  const removeFromFavouritesHandler = () => {
    const newFavourites = state.favourites.filter(
      (person) => person.id !== currentPersonID
    );
    dispatch({
      type: 'REMOVE_FAVOURITE',
      payload: newFavourites,
    });
    removeDataFromIDBStore('userDatabase', '1', 'favourites', currentPersonID);
    setCurrentPersonID(null);
  };

  const setHandlerFunction = (e) => {
    e.stopPropagation();
    setShowBackground(false);
    return isPersonInFavourites()
      ? removeFromFavouritesHandler
      : addToFavoritesHandler;
  };

  const setText = () => {
    return isPersonInFavourites()
      ? 'Remove from favourites'
      : 'Add to favourites';
  };

  const handleMouseOver = (e) => {
    const target = e.target.closest('div');
    const handleMouseOut = (e) => {
      const relatedTarget = e.relatedTarget;
      if (!relatedTarget.classList.contains('person__options-btn')) {
        setCurrentPersonID(null);
        target.removeEventListener('mouseleave', handleMouseOut);
      }
    };
    target.addEventListener('mouseleave', handleMouseOut);
  };

  return (
    <div className="person-options-container" onMouseEnter={handleMouseOver}>
      <p className="person-options-container__name">Person: {person.name}</p>
      <ul className="person-options-list">
        <li className="person-options-list__item person-options-list__item--triangled">
          <button
            className="person-options-list__btn"
            onClick={(e) => setHandlerFunction(e)()}
          >
            {setText()}
          </button>
        </li>
        <li className="person-options-list__item person-options-list__item--edit-btn">
          <button
            className="person-options-list__btn"
            onClick={(e) => editHandler(e)}
          >
            Edit
          </button>
        </li>
        <li className="person-options-list__item person-options-list__item--delete-btn">
          <button
            className="person-options-list__btn"
            onClick={(e) => handleDeletePerson(e, currentPersonID)}
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
}

export default PersonOptions;
