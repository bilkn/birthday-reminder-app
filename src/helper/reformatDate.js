const reformatDate = (date) => {
  const birthday = date.split('-').reverse().join('.');
  return birthday;
};

export default reformatDate;
