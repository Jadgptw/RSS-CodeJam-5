import React from 'react';

import SearchOptionsView from '../../views/searchPage/SearchOptionsView';

const SearchOptionsCreator = ({ searchOptions, onOptionsChange, onFilterChange, t }) => {
  const handleChange = (event) => {
    const currentOption = event.target.getAttribute('data-option');
    onOptionsChange(currentOption);
  };

  const handleFilter = (filterOption) => {
    onFilterChange(filterOption.value)
  };

  return (
    <SearchOptionsView searchOptions={searchOptions} handleChange={handleChange} handleFilter={handleFilter}/>
  )
};

export default SearchOptionsCreator;