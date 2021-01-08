import './PersonOptions.scss';
import { useContext } from 'react';
import { PeopleContext } from '../../context/PeopleContext/PeopleContext';
import findPersonByID from '../../helper/findPersonByID';
import { putItemToIDB } from '../../utils/IndexedDB/indexedDBManagement';
function PersonOptions({ currentPersonID, setCurrentPersonID }) {
  const { state, dispatch } = useContext(PeopleContext);

  const addToFavoritesHandler = () => {
    const isPersonInFavourites = state.favourites.some(
      (person) => person.id === currentPersonID
    );
    if (!isPersonInFavourites) {
      const person = findPersonByID(state.people, currentPersonID);
      dispatch({
        type: 'ADD_FAVOURITE',
        payload: [...state.favourites, person],
      });
      putItemToIDB(person, 'userDatabase', '1', 'favourites');
    }
    setCurrentPersonID(null);
  };

  return (
    <div className="person-options-container">
      <ul className="person-options-list">
        <li className="person-options-list__item">
          <label
            className="person-options-list__label"
            htmlFor="favourite"
            onClick={addToFavoritesHandler}
          >
            Add to favorites
          </label>
          <input
            id="favourite"
            type="text"
            hidden={true}
            value="add-favourite"
            readOnly={true}
          />
        </li>
        <hr className="person-options-list__line" />
        <li className="person-options-list__item">
          <label className="person-options-list__label" htmlFor="edit">
            Edit
          </label>
          <input
            id="edit"
            type="text"
            hidden={true}
            value="edit-person"
            readOnly={true}
          />
        </li>
      </ul>
    </div>
  );
}

export default PersonOptions;
