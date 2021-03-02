import './PersonOptions.scss';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext/AppContext';
import findPersonByID from '../../helpers/findPersonByID';
import { putItemToIDB } from '../../utils/IndexedDB/indexedDBManagement';
import matchMinMedia from '../../helpers/matchMinMedia';

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
  const [favText, setFavText] = useState('');

  const isPersonInFavourites = (person) => {
    return person && person.inFavourites;
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    setShowBackground(() => true);
    setShowEditPersonUI(true);
    setTimeout(() => setCurrentPersonID(null), 0);
  };

  const handleAddFavourites = () => {
    const oldPeople = state.people.filter(
      (person) => currentPersonID !== person.id
    );
    const modifiedPerson = {
      ...person,
      inFavourites: true,
    };

    dispatch({
      type: 'ADD_FAVOURITE',
      payload: {
        people: [...oldPeople, modifiedPerson],
        name: modifiedPerson.name,
      },
    });
    try {
      putItemToIDB(modifiedPerson, 'userDatabase', '1', 'people');
    } catch (err) {
      console.log(err);
    }
    setCurrentPersonID(null);
  };

  const handleRemoveFavourites = () => {
    const oldPeople = state.people.filter(
      (person) => person.id !== currentPersonID
    );
    const modifiedPerson = {
      ...person,
      inFavourites: false,
    };
    dispatch({
      type: 'REMOVE_FAVOURITE',
      payload: {
        people: [...oldPeople, modifiedPerson],
        name: modifiedPerson.name,
      },
    });
    setCurrentPersonID(null);
  };

  const setHandlerFunction = (e) => {
    e.stopPropagation();
    setShowBackground(false);
    return isPersonInFavourites(person)
      ? handleRemoveFavourites
      : handleAddFavourites;
  };

  const handleMouseOver = (e) => {
    const dropDownBtn = document.querySelector('.person__dropdown-btn');
    if (matchMinMedia(769)) {
      const target = e.target.closest('div');
      const handleMouseOut = (e) => {
        const relatedTarget = e.relatedTarget;
        if (
          relatedTarget &&
          !relatedTarget.classList.contains('person__dropdown-btn')
        ) {
          dropDownBtn.style = {};
          setCurrentPersonID(null);
          target.removeEventListener('mouseleave', handleMouseOut);
        }
      };
      target.addEventListener('mouseleave', handleMouseOut);
    }
  };

  useEffect(() => {
    isPersonInFavourites(person)
      ? setFavText('Remove from favourites')
      : setFavText('Add to favourites');
  }, [person]);

  return (
    <div className="person-options-container" onMouseEnter={handleMouseOver}>
      <p className="person-options-container__name">
        Person: {person && person.name}
      </p>
      <ul className="person-options-list">
        <li className="person-options-list__item person-options-list__item--triangled">
          <button
            className="person-options-list__btn"
            onClick={(e) => setHandlerFunction(e)()}
          >
            {favText}
          </button>
        </li>
        <li className="person-options-list__item person-options-list__item--edit-btn">
          <button
            className="person-options-list__btn"
            onClick={(e) => handleEdit(e)}
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
