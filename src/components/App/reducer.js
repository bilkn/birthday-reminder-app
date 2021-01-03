export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    return {
      ...state,
      people: action.payload,
      isModalOpen: true,
      modalContent: 'Person is added.',
    };
  } else if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      people: action.payload,
      isModalOpen: true,
      modalContent: 'Person is removed.',
    };
  } else if (action.type === 'REMOVE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
      modalContent: '',
    };
  } else if (action.type === 'INVALID_NAME') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Name input should includes at least one character.',
    };
  } else if (action.type === 'INVALID_DATE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please provide correct date format.',
    };
  }
};
