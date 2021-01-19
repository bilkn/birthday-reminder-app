import validatePicture from './validatePicture';
const validatePersonData = (name, date, picture) => {
  if (name.length <= 0) return 'INVALID_NAME';
  else if (!dateValidation(date)) return 'INVALID_DATE';
  else if (!validatePicture(picture)) return 'INVALID_FILE_TYPE';
  return true;
};

function dateValidation(date) {
  let regex = /\d\d(\.|-|\/)\d\d(\.|-|\/)\d\d\d\d/;
  let regex2 = /\d\d\d\d(\.|-|\/)\d\d(\.|-|\/)\d\d/;
  return regex.test(date) || regex2.test(date);
}

export default validatePersonData;
