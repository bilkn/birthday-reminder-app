import { openDB } from 'idb';
async function accesDB(database, version) {
  const myDB = await openDB(database, version, {
    upgrade(database) {
      database.createObjectStore('people', { keyPath: 'id' });
    },
  });
  
  return myDB;
}

async function getIDBStore(database, version, store) {
  const myDB = await accesDB(database, version);
  const tx = myDB.transaction(store, 'readwrite');
  const myStore = tx.objectStore(store);
  return myStore;
}

export { accesDB, getIDBStore };
