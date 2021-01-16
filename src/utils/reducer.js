export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        people: action.payload,
        isModalOpen: true,
        modalContent: 'Person is added.',
      };

    case 'REMOVE_ITEM': {
      const people = action.payload.people;
      const favourites = action.payload.favourites;
      return {
        ...state,
        people: people,
        favourites: favourites,
        isModalOpen: true,
        modalContent: 'Person is removed.',
      };
    }
    case 'REMOVE_MODAL': {
      return {
        ...state,
        isModalOpen: false,
        modalContent: '',
      };
    }
    case 'INVALID_NAME': {
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'Name input should includes at least one character.',
      };
    }
    case 'INVALID_DATE': {
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'Please provide correct date format.',
      };
    }
    case 'SORT_PEOPLE_BY_AGE': {
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'SORT BY AGE',
      };
    }
    case 'SORT_PEOPLE_BY_MONTH': {
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'SORT BY MONTH',
      };
    }
    case 'SORT_PEOPLE_BY_NAME': {
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'SORT BY NAME',
      };
    }
    case 'FILTER_PEOPLE_BY_NAME': {
      return {
        ...state,
        people: action.payload,
        isModalOpen: false,
        modalContent: '',
      };
    }
    case 'FILTER_FAVOURITES_BY_NAME': {
      return {
        ...state,
        favourites: action.payload,
        isModalOpen: false,
        modalContent: '',
      };
    }
    case 'INITIAL_LOAD': {
      return {
        ...state,
        people: action.payload.people,
        favourites: action.payload.favourites,
        isModalOpen: false,
        modalContent: '',
      };
    }
    case 'INVALID_FILE_TYPE': {
      return {
        ...state,
        isModalOpen: true,
        modalContent:
          'Invalid file type. Please provide ".jpeg", or ".png" file for the picture.',
      };
    }
    case 'ADD_FAVOURITE': {
      const personName = action.payload[action.payload.length - 1].name;
      return {
        ...state,
        isModalOpen: true,
        modalContent: `${personName} has been added to your favorites.`,
        favourites: action.payload,
      };
    }
    case 'REMOVE_FAVOURITE': {
      const personName =
        action.payload.length && action.payload[action.payload.length - 1].name;
      const modalContent = personName
        ? `${personName} has been removed from your favorites.`
        : 'Favourites have been cleared.';
      return {
        ...state,
        isModalOpen: true,
        modalContent: modalContent,
        favourites: action.payload,
      };
    }
    case 'EDIT_PERSON': {
      const favourites = action.payload.favourites;
      const personName = favourites[favourites.length - 1].name;
      return {
        ...state,
        isModalOpen: true,
        modalContent: `${personName}'s information has been changed.`,
        people: action.payload.people,
        favourites: favourites,
      };
    }
    default:
      break;
  }
};
