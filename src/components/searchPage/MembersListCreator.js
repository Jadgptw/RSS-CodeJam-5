import React from 'react';
import _ from 'lodash';

import MemberView from '../../views/searchPage/MemberView';

const MemberListCreator = ({filterBy, photographers}) => {
  const filter = (filterBy) => {
    if(filterBy) {
      return _.filter(photographers, photographer => (
        photographer.lastName === filterBy || photographer.location === filterBy
      ))
    }
    return _.cloneDeep(photographers);
  };

  const filteredPhotographers = filter(filterBy);

  return (
    <section className="search-page-photographers">
      <h3>Список фотографов</h3>
      <ul className="search-page-photographers-list">
        {_.map(filteredPhotographers, photographer =>
          <MemberView key={`${photographer.firstName}_${photographer.lastName}`} {...photographer}/>
        )}
      </ul>
    </section>
  )
};

export default MemberListCreator;