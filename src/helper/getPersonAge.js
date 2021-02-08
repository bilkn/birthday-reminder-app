function getPersonAge(person) {
  const regex = /(\.|-|\/)/;
  let birthday = person.birthday
    .split(regex)
    .filter((item) => !regex.test(item));
  if (birthday[0].length !== 4) {
    birthday = birthday.reverse();
  }

  const date = new Date(birthday[0], birthday[1], birthday[2]);
  var difference = Date.now() - date.getTime();
  var age_dt = new Date(difference);
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

export default getPersonAge;
