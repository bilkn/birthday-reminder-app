import validatePicture from './validatePicture';
const validatePersonData = (name, date, picture) => {
  if (name.length <= 0) return 'INVALID_NAME';
  else if (!monthValidation(date)) return 'INVALID_MONTH';
  else if (!dateValidation(date)) return 'INVALID_DATE';
  else if (!validatePicture(picture)) return 'INVALID_FILE_TYPE';
  return true;
};

function dateValidation(date) {
  let regex = /\d\d(\.|-|\/)\d\d(\.|-|\/)\d\d\d\d/;
  let regex2 = /\d\d\d\d(\.|-|\/)\d\d(\.|-|\/)\d\d/;
  return regex.test(date) || regex2.test(date);
}

function monthValidation(date) {
  const formatDate = +date.slice(3, 5);
  console.log(formatDate <= 12);
  return +date.slice(3, 5) <= 12;
}

export default validatePersonData;
