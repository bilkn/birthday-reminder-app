import { testDateWithCommonFormat } from './dateFormatValidations';

function dayValidation(date) {
  const { result } = testDateWithCommonFormat(date);
  const dayValue = result ? +date.slice(0, 2) : +date.slice(-2);
  console.log('day', dayValue);
  console.log(dayValue <= 31 && dayValue > 0);
  return dayValue <= 31 && dayValue > 0;
}

function monthValidation(date) {
  const { result } = testDateWithCommonFormat(date);
  const monthValue = result ? +date.slice(3, 5) : +date.slice(5, 7);
  console.log('month', monthValue);
  return monthValue <= 12 && monthValue > 0;
}

function yearValidation(date) {
  const { result } = testDateWithCommonFormat(date);
  const yearValue = result ? +date.slice(-4) : +date.slice(0, 4);
  console.log('month', yearValue);
  const currentYear = new Date().getFullYear();
  return yearValue <= currentYear && yearValue > 1000;
}

export { dayValidation, monthValidation, yearValidation };
