import validateLocalData from './validateLocalData';

// *!! Add ID validation.
function removeDataFromLocalStorageByID(targetKey, id) {
  const localStorage = window.localStorage;
  const localTargetData = validateLocalData(targetKey);
  if (localTargetData) {
    const parsedLocalData = JSON.parse(localTargetData);
    const filteredData = parsedLocalData.filter((data) => data.id !== id);
    const updatedJSONData = JSON.stringify(filteredData);
    localStorage.setItem(targetKey, updatedJSONData);
  } else {
    console.log('id is not exist.');
  }
}

export default removeDataFromLocalStorageByID;
