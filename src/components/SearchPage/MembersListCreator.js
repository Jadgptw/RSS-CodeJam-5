import React from 'react';
import _ from 'lodash';

import MemberView from '../../views/Search/MemberView';

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
      <ul className="search-page-photographers-list">
        {_.map(filteredPhotographers, photographer =>
          <MemberView key={`${photographer.firstName}_${photographer.lastName}`} {...photographer}/>
        )}
      </ul>
    </section>
  )
};

export default MemberListCreator;