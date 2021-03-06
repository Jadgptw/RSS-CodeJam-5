import React, { Component, Fragment } from 'react';
import { withNamespaces } from 'react-i18next';

import _ from 'lodash';

import Navigation from './Navigation';
import Background from '../views/homePage/Background'

import photographers from '../photographs/photographs';
import SearchOptionsCreator from './searchPage/SearchOptionsCreator';
import MembersListCreator from './searchPage/MembersListCreator';

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
    const { t } = this.props;

    _.forEach(surnameOptions, option => {
      option.label = t(option.value);
    });

    _.forEach(locationOptions, option => {
      option.label = t(option.value);
    });

    return (
      <Fragment>
        <Background/>
        <Navigation/>
        <section className="search-page container background-BlackLine">
          <h2>{t("Фотографы Беларуси")}</h2>
          <SearchOptionsCreator {...this.state} onOptionsChange={this.handleChange} onFilterChange={this.handleFilter}/>
          <MembersListCreator {...this.state} photographers={photographers} />
        </section>
      </Fragment>
    )
  }
}

export default withNamespaces()(Search);