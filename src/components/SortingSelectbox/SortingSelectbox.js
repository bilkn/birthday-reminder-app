import React from 'react';
import handleSorting from '../../helper/handleSorting';
import './SortingSelectbox.scss';
function SortingSelectbox() {
  const handleChange = (e)=> {
    const value = e.target.value;
    handleSorting()
  }
  return (
    <select className="sorting-selectbox" onChange={handleChange}>
      <option value="sort-by-name" className="sorting-selectbox__option">Sort by name</option>
      <option value="sort-by-age" className="sorting-selectbox__option">Sort by age</option>
      <option value="sort-by-month" className="sorting-selectbox__option">Sort by month</option>
    </select>
  );
}

export default SortingSelectbox;
