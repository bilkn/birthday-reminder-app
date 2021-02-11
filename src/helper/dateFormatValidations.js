function testDateWithCommonFormat(date) {
  const regex = /(\d\d)(\.|-|\/)(\d\d)(\.|-|\/)(\d\d\d\d)/;
  const result = regex.test(date);
  return { result, regex };
}

function testDateWithUncommonFormat(date) {
  const regex = /(\d\d\d\d)(\.|-|\/)(\d\d)(\.|-|\/)(\d\d)/;
  const result = regex.test(date);
  return { result, regex };
}

export { testDateWithCommonFormat, testDateWithUncommonFormat };
