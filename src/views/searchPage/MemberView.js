import React from 'react';
import { Link} from 'react-router-dom';

const SearchOptionsView = ({ firstName, lastName }) => {
  return (
    <li>
      {firstName} {lastName}
      <Link to={`member/${lastName}/${firstName}`}>
        <button className="search-page-select-photographer" type="button">Показать</button>
      </Link>
    </li>
  )
};

export default SearchOptionsView;