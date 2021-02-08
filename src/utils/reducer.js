export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return {
        ...state,
        people: action.payload,
        isModalOpen: true,
        modalContent: 'Person is added.',
      };

    case 'REMOVE_PERSON': {
      return {
        ...state,
        people: action.payload.people,
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
        modalContent:
          'Please provide correct date format, (yyyy/mm/dd), or (dd/mm/yyyy) with any date seperators.',
      };
    }
    case 'INVALID_MONTH': {
      return {
        ...state,
        isModalOpen: true,
        modalContent:
          'Please provide correct date format, month value cannot be greater than 12',
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
    case 'INITIAL_LOAD': {
      return {
        ...state,
        people: action.payload.people,
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
      const personName = action.payload.name;
      return {
        ...state,
        isModalOpen: true,
        modalContent: `${personName} has been added to your favorites.`,
        people: action.payload.people,
      };
    }
    case 'REMOVE_FAVOURITE': {
      const personName = action.payload.name;
      return {
        ...state,
        isModalOpen: true,
        modalContent: `${personName} has been removed from your favorites.`,
        people: action.payload.people,
      };
    }
    case 'EDIT_PERSON': {
      const personName = action.payload.name;
      return {
        ...state,
        isModalOpen: true,
        modalContent: `${personName}'s information has been changed.`,
        people: action.payload.people,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
