import React from 'react';

const SearchOptionsView = ({ firstName, lastName }) => {
  return (
    <li>
      {firstName} {lastName}
      <button className="search-page-select-photographer" type="button">Показать</button>
    </li>
  )
};

export default SearchOptionsView;