  import getData from '../../utils/data';
  const defaultState = {
    people: getData(),
    isModalOpen: false,
    modalContext: '',
  };

  export default defaultState;
