import React from 'react';
import { Link} from 'react-router-dom';

const SearchOptionsView = ({ firstName, lastName, location }) => {
  return (
    <li>
      <span>{firstName} {lastName}, {location}</span>
      <Link className="search-page-select-photographer" to={`member/${lastName}/${firstName}`}>
        Показать
      </Link>
    </li>
  )
};

export default SearchOptionsView;