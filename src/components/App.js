import React, { Component, Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';

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
          <main>
            <Route exact path="/" component={Home}/>
            <Route path="/member/:lastName/:firstName" component={Member}/>
            <Route path="/search" component={Search}/>
          </main>
        </Fragment>
      </HashRouter>
    )
  }
}

export default App;