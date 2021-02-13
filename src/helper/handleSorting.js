function handleSorting(sortState, setSortState) {
  switch (sortState) {
    case 'sortByName':
      setSortState(()=>'sortByAge');
      break;
    case 'sortByAge':
      setSortState(()=>'sortByMonth');
      break;
    case 'sortByMonth':
      setSortState(()=>'sortByName');
      break;
    default:
      break;
  }
}

export default handleSorting;
