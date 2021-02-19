function handleSorting(sortState) {
  switch (sortState) {
    case 'sortByName':
      return 'sortByAge';
    case 'sortByAge':
      return 'sortByMonth';
    case 'sortByMonth':
      return 'sortByName';
    default:
      break;
  }
}

export default handleSorting;
