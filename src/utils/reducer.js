export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return {
        ...state,
        people: action.payload,
        isNotificationOpen: true,
        notificationContent: 'Person has been added.',
      };

    case 'REMOVE_PERSON': {
      return {
        ...state,
        people: action.payload.people,
        isNotificationOpen: true,
        notificationContent: 'Person has been deleted.',
      };
    }
    case 'REMOVE_MODAL': {
      return {
        ...state,
        isNotificationOpen: false,
        notificationContent: '',
      };
    }
    case 'INVALID_NAME': {
      return {
        ...state,
        isNotificationOpen: true,
        notificationContent: 'Name input must include at least one character.',
      };
    }
    case 'INVALID_DATE': {
      return {
        ...state,
        isNotificationOpen: true,
        notificationContent:
          'Please provide correct date format, (yyyy/mm/dd), or (dd/mm/yyyy) with any date seperators.',
      };
    }

    case 'INVALID_DAY': {
      return {
        ...state,
        isNotificationOpen: true,
        notificationContent: 'Day value must be between 1 and 31 (inclusive).',
      };
    }
    case 'INVALID_MONTH': {
      return {
        ...state,
        isNotificationOpen: true,
        notificationContent:
          'Month value must be between 1 and 12 (inclusive).',
      };
    }
    case 'INVALID_YEAR': {
      return {
        ...state,
        isNotificationOpen: true,
        notificationContent:
          'Day value must be between 1000 and current year (inclusive).',
      };
    }
    case 'SORT_PEOPLE_BY_AGE': {
      return {
        ...state,
        isNotificationOpen: true,
        notificationContent: 'SORT BY AGE',
      };
    }
    case 'SORT_PEOPLE_BY_MONTH': {
      return {
        ...state,
        isNotificationOpen: true,
        notificationContent: 'SORT BY MONTH',
      };
    }
    case 'SORT_PEOPLE_BY_NAME': {
      return {
        ...state,
        isNotificationOpen: true,
        notificationContent: 'SORT BY NAME',
      };
    }
    case 'FILTER_PEOPLE_BY_NAME': {
      return {
        ...state,
        people: action.payload,
        isNotificationOpen: false,
        notificationContent: '',
      };
    }
    case 'INITIAL_LOAD': {
      return {
        ...state,
        people: action.payload.people,
        isNotificationOpen: false,
        notificationContent: '',
      };
    }
    case 'INVALID_FILE_TYPE': {
      return {
        ...state,
        isNotificationOpen: true,
        notificationContent:
          'Invalid file type. Please provide ".jpeg", or ".png" file for the picture.',
      };
    }
    case 'ADD_FAVOURITE': {
      const personName = action.payload.name;
      return {
        ...state,
        isNotificationOpen: true,
        notificationContent: `${personName} has been added to your favorites.`,
        people: action.payload.people,
      };
    }
    case 'REMOVE_FAVOURITE': {
      const personName = action.payload.name;
      return {
        ...state,
        isNotificationOpen: true,
        notificationContent: `${personName} has been removed from your favorites.`,
        people: action.payload.people,
      };
    }
    case 'EDIT_PERSON': {
      const personName = action.payload.name;
      console.log(action.payload);
      return {
        ...state,
        isNotificationOpen: true,
        notificationContent: `${personName}'s information has been changed.`,
        people: action.payload.people,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
