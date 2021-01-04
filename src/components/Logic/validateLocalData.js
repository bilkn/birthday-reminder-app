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

export default validateLocalData;
