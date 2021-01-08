import getData from './data';

async function defaultState() {
  const people = await getData("userDatabase", "1", "people");
  const favourites = await getData("userDatabase", "1","favourites");
  const defaultState = {
    people: people,
    isModalOpen: false,
    modalContext: '',
    favourites: favourites
  };
  return defaultState;
}

export default defaultState;
