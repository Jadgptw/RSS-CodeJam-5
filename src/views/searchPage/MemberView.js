import React from 'react';
import { Link} from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

const SearchOptionsView = ({ firstName, lastName, location, t }) => {
  return (
    <li>
      <span>{t(firstName)} {t(lastName)}, {t(location)}</span>
      <Link className="search-page-select-photographer" to={`member/${lastName}/${firstName}`}>
        {t("show")}
      </Link>
    </li>
  )
};

export default withNamespaces()(SearchOptionsView);