import React from 'react';
import Select from 'react-select';

import './styles/index.css';

const SearchOptionsView = ({ searchOptions, handleChange, handleFilter }) => {
  return (
    <section className="search-page-filter">
      <div className="search-page-option" onChange={handleChange}>
        <label>
          <span>Фильтровать по имени</span>
          <input type="radio" name="find-option" data-option="surname" defaultChecked={true}/>
        </label>
        <label>
          <span>Фильтровать по месту работы</span>
          <input type="radio" name="find-option" data-option="location"/>
        </label>
      </div>
      <Select
        className="search-page-photographer-filter"
        onChange={handleFilter}
        options={searchOptions}
      />
    </section>
  )
};

export default SearchOptionsView;