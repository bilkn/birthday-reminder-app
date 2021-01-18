const reformatDate = (date) => {
  // If date format is like "ddmmyyyy" without any seperators ("-","/" etc.), date format will be corrected.
  if (date.length === 8) {
    const birthday = `${date.slice(0,2)}.${date.slice(2,4)}.${date.slice(4,8)}`; 
    return birthday;
  }
  return date;
};

export default reformatDate;
