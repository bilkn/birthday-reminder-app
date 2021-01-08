import validatePicture from "./validatePicture";
const validatePersonData = (name, date, picture) => {
  if (name.length <= 0) return 'INVALID_NAME';
  else if (date.length !== 10) return 'INVALID_DATE';
  else if (!validatePicture(picture)) return 'INVALID_FILE_TYPE';
  return true;
};

export default validatePersonData;
