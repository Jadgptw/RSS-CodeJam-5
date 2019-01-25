import React, { Component } from 'react';
import Select from 'react-select';

import _ from 'lodash';

import photographers from '../photographs/photographs';

const surnameOptions = _.map(photographers, photographer => ({ value: photographer.lastName, label: photographer.lastName }));

const locations = Array.from(new Set(_.map(photographers, photographer => (photographer.location))));
const locationOptions = _.map(locations, location => ({ value: location, label: location }));

class Search extends Component {
  state = {
    searchOptions: surnameOptions,
    filterBy: ''
  };

  handleChange = (event) => {
    const currentOption = event.target.getAttribute('data-option');
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
      filterBy: filterOption.value,
    });
  };

  render() {
    return (
      <section className="search-page">
        <h1>Search Page</h1>
        <div className="search-page-option" onChange={this.handleChange}>
          <label>
            <span>Find by photographer surname</span>
            <input type="radio" name="find-option" data-option="surname" defaultChecked={true}/>
          </label>
          <label>
            <span>Find by photographer location</span>
            <input type="radio" name="find-option" data-option="location"/>
          </label>
          {console.log(this.state)}
        </div>
        <Select
          className="container photographer-select"
          onChange={this.handleFilter}
          options={this.state.searchOptions}
        />
      </section>
    )
  }
}

export default Search;