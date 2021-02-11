import { testDateWithCommonFormat, testDateWithUncommonFormat } from './dateFormatValidations';
import { dayValidation, monthValidation, yearValidation } from './dateValueValidations';
import validatePicture from './validatePicture';

const validatePersonData = (name, date, picture) => {
  if (name.length <= 0) return 'INVALID_NAME';
  else if (!dateValidation(date)) return 'INVALID_DATE';
  else if (!dayValidation(date)) return 'INVALID_DAY';
  else if (!monthValidation(date)) return 'INVALID_MONTH';
  else if (!yearValidation(date)) return 'INVALID_YEAR';
  else if (!validatePicture(picture)) return 'INVALID_FILE_TYPE';
  return true;
};

function dateValidation(date) {
  return testDateWithCommonFormat(date).result || testDateWithUncommonFormat(date).result;
}


export default validatePersonData;
