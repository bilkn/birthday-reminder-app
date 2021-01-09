import { removeDataFromIDBStore } from '../utils/IndexedDB/indexedDBManagement';

function RemovePersonFromFavourites(id, favourites) {
  let newFavourites = favourites.filter((person) => person.id !== id);
  removeDataFromIDBStore('userDatabase', '1', 'favourites', id);
  return newFavourites;
}

export default RemovePersonFromFavourites;
