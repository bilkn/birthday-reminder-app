import './PersonOptions.scss';
import { useContext } from 'react';
import { PeopleContext } from '../../context/PeopleContext/PeopleContext';
import findPersonByID from '../../helper/findPersonByID';
import {
  putItemToIDB,
  removeDataFromIDBStore,
} from '../../utils/IndexedDB/indexedDBManagement';

function PersonOptions({ currentPersonID, setCurrentPersonID }) {
  const { state, dispatch } = useContext(PeopleContext);

  const isPersonInFavourites = () => {
    // Prevents the person from being added to favorites again.
    return state.favourites.some((person) => person.id === currentPersonID);
  };

  const addToFavoritesHandler = () => {
    const person = findPersonByID(state.people, currentPersonID);
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
  };

  const setHandlerFunction = () => {
    return isPersonInFavourites()
      ? removeFromFavouritesHandler
      : addToFavoritesHandler;
  };

  const setText = () => {
    return isPersonInFavourites()
      ? 'Remove from favourites'
      : 'Add to favourites';
  };

  return (
    <div className="person-options-container">
      <ul className="person-options-list">
        <li className="person-options-list__item">
          <button
            className="person-options-list__btn"
            onClick={() => setHandlerFunction()()}
          >
            {setText()}
          </button>
        </li>
        <hr className="person-options-list__line" />
        <li className="person-options-list__item">
          <button className="person-options-list__btn">Edit</button>
        </li>
      </ul>
    </div>
  );
}

export default PersonOptions;
