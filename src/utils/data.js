import { getDataFromIDBStore } from './IndexedDB/indexedDBManagement';

async function getData(database, version, store) {
  try {
    const data = await getDataFromIDBStore(database, version, store);
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export default getData;
