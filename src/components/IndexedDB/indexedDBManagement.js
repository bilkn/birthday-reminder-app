import { getIDBStore } from './indexedDBValidation';
async function putItemToIDB(item, database, version, store) {
  try {
    const accessedStore = await getIDBStore(database, version, store);
    await accessedStore.put(item);
  } catch (err) {
    console.log(err);
  }
}

async function getDataFromIDBStore(database, version, store) {
  try {
    const accessedStore = await getIDBStore(database, version, store);
    const data = await accessedStore.getAll();
    return data;
  } catch (err) {
    console.log(err);
  }
}

 async function removeDataFromIDBStore(database, version, store, key) {
  try {
    const accessedStore = await getIDBStore(database, version, store);
    accessedStore.delete(key);
  }
  catch (err) {
    console.log(err);
  }
} 

export { putItemToIDB, getDataFromIDBStore, removeDataFromIDBStore };
