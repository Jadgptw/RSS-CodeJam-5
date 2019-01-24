import React, { Component, Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Home from "./Home";
import Member from "./Member";
import Search from "./Search";

class App extends Component{
  state = {
    language: 'en'
  };

  render() {
    return (
      <HashRouter>
        <Fragment>
          <Navigation/>
          <main className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/member" component={Member}/>
            <Route path="/search" component={Search}/>
          </main>
        </Fragment>
      </HashRouter>
    )
  }
}

export default App;