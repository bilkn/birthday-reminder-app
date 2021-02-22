function testDateWithCommonFormat(date) {
  const regex = /(\d\d)(\.|-|\/)(\d\d)(\.|-|\/)(\d{4})/;
  const result = regex.test(date);
  return { result, regex };
}

function testDateWithUncommonFormat(date) {
  const regex = /(\d{4})(\.|-|\/)(\d\d)(\.|-|\/)(\d\d)/;
  const result = regex.test(date);
  return { result, regex };
}

export { testDateWithCommonFormat, testDateWithUncommonFormat };
