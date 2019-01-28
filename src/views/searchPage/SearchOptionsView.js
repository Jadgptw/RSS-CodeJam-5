import React from 'react';
import { withNamespaces } from 'react-i18next';
import Select from 'react-select';

import './styles/index.css';

const SearchOptionsView = ({ searchOptions, handleChange, handleFilter, t }) => {
  return (
    <section className="search-page-filter">
      <div className="search-page-option" onChange={handleChange}>
        <label>
          <span>{t("filter-by-name")}</span>
          <input type="radio" name="find-option" data-option="surname" defaultChecked={true}/>
        </label>
        <label>
          <span>{t("filter-by-city")}</span>
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

export default withNamespaces()(SearchOptionsView);