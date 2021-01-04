import validateLocalData from "./validateLocalData";
function addDataToLocalStorage(newData, targetKey) {
  const localStorage = window.localStorage;
  const localTargetData = validateLocalData(targetKey);
  // Add targetKey string validation.
  if (localTargetData) {
    const parsedLocalData = JSON.parse(localTargetData);
    const updatedLocalData = [...parsedLocalData, newData];
    const updatedJSONData = JSON.stringify(updatedLocalData);
    localStorage.setItem(targetKey, updatedJSONData);
  } else {
    const newDataJSON = JSON.stringify(newData);
    localStorage.setItem(targetKey, [newDataJSON]);
    console.log(
      `${newData} is added to ${targetKey} on the local storage.`
    );
  }
}


export default addDataToLocalStorage;
