import React, { Component } from 'react';

import _ from 'lodash';

import photographers from '../photographs/photographs';
import SearchOptionsCreator from './SearchPage/SearchOptionsCreator';
import MembersListCreator from './SearchPage/MembersListCreator';

const surnameOptions = _.map(photographers, photographer => ({ value: photographer.lastName, label: photographer.lastName }));

const locations = Array.from(new Set(_.map(photographers, photographer => (photographer.location))));
const locationOptions = _.map(locations, location => ({ value: location, label: location }));

class Search extends Component {
  state = {
    searchOptions: surnameOptions,
    filterBy: ''
  };

  handleChange = (currentOption) => {
    switch (currentOption) {
      case 'location':
        this.setState({
          searchOptions: locationOptions,
        });
        break;
      default:
        this.setState({
          searchOptions: surnameOptions,
        });
    }
  };

  handleFilter = (filterOption) => {
    this.setState({
      filterBy: filterOption,
    });

  };

  render() {
    return (
      <section className="search-page">
        <SearchOptionsCreator {...this.state} onOptionsChange={this.handleChange} onFilterChange={this.handleFilter}/>
        <MembersListCreator {...this.state} photographers={photographers} />
      </section>
    )
  }
}

export default Search;