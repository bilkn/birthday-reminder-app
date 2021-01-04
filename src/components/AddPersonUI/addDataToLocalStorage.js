function addDataToLocalStorage(newData, targetProperty) {
  const localStorage = window.localStorage;
  const localTargetData = validateLocalData(targetProperty);
  // Add targetProperty string validation.
  if (localTargetData) {
    const parsedLocalData = JSON.parse(localTargetData);
    const updatedLocalData = [...parsedLocalData, newData];
    const updatedJSONData = JSON.stringify(updatedLocalData);
    localStorage.setItem(targetProperty, updatedJSONData);
  } else {
    const newDataJSON = JSON.stringify(newData);
    localStorage.setItem(targetProperty, [newDataJSON]);
    console.log(
      `${newData} is added to ${targetProperty} on the local storage.`
    );
  }
}
function validateLocalData(targetProperty) {
  const localStorage = window.localStorage;
  try {
    const localTargetData = localStorage.getItem(targetProperty);
    if (!localTargetData) {
      throw ReferenceError;
    } else if (typeof targetProperty !== 'string') {
      throw TypeError;
    }
    return localTargetData;
  } catch (err) {
    if (err instanceof TypeError) {
      console.log('Please provide a String.');
    } else if (err instanceof ReferenceError) {
      console.log('Data could not found.');
    }
  }
}

export default addDataToLocalStorage;
