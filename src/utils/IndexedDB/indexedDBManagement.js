import { getIDBStore } from './indexedDBValidation';
async function putItemToIDB(item, database, version, store) {
  const accessedStore = await getIDBStore(database, version, store);
  await accessedStore.put(item);
}

async function getDataFromIDBStore(database, version, store) {
  const accessedStore = await getIDBStore(database, version, store);
  const data = await accessedStore.getAll();
  return data;
}

async function removeDataFromIDBStore(database, version, store, key) {
  const accessedStore = await getIDBStore(database, version, store);
  accessedStore.delete(key);
}

function arrayBufferToBlob(buffer, type) {
  return new Blob([buffer], { type: type });
}

function blobToArrayBuffer(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('loadend', (e) => {
      resolve(reader.result);
    });
    reader.addEventListener('error', reject);
    reader.readAsArrayBuffer(blob);
  });
}

export {
  putItemToIDB,
  getDataFromIDBStore,
  removeDataFromIDBStore,
  blobToArrayBuffer,
  arrayBufferToBlob,
};
