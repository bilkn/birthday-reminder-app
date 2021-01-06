import getData from '../../utils/data';

async function defaultState() {
  const data = await getData();
  const defaultState = {
    people: data,
    isModalOpen: false,
    modalContext: '',
  };
  return defaultState;
}

export default defaultState;
