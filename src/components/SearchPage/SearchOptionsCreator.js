import React from 'react';
import Select from 'react-select';

const SearchOptionsCreator = (props) => {
  const {
    searchOptions,
    onOptionsChange,
    onFilterChange } = props;

  const handleChange = (event) => {
    const currentOption = event.target.getAttribute('data-option');
    onOptionsChange(currentOption);
  };

  const handleFilter = (filterOption) => {
    onFilterChange(filterOption.value)
  };

  return (
    <section className="search-page">
      <h1>Search Page</h1>
      <div className="search-page-option" onChange={handleChange}>
        <label>
          <span>Find by photographer surname</span>
          <input type="radio" name="find-option" data-option="surname" defaultChecked={true}/>
        </label>
        <label>
          <span>Find by photographer location</span>
          <input type="radio" name="find-option" data-option="location"/>
        </label>
      </div>
      <Select
        className="container photographer-select"
        onChange={handleFilter}
        options={searchOptions}
      />
    </section>
  )
};

export default SearchOptionsCreator;