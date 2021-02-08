function reformatDateSeperator(date) {
  return date.replace(/(\.|-|\/)/g, '.');
}

export default  reformatDateSeperator;
