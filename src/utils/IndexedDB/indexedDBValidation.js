import { openDB } from 'idb';
async function accesDB(database, version) {
  let myDB = null;
  try {
    myDB = await openDB(database, version, {
      upgrade(database) {
        database.createObjectStore('people', { keyPath: 'id' });
      },
    });
  } catch (err) {
    console.log(err);
    return;
  }

  return myDB;
}

async function getIDBStore(database, version, store) {
  let myDB = null;
  try {
    myDB = await accesDB(database, version);
  } catch (err) {
    console.log(err);
  }
  const tx = myDB.transaction(store, 'readwrite');
  const myStore = tx.objectStore(store);
  return myStore;
}

export { accesDB, getIDBStore };
