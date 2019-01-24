import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link, HashRouter, Route } from 'react-router-dom';
import './index.css';

import Home from './components/Home';
import Member from './components/Member';
import Search from './components/Search';

ReactDOM.render(
    <HashRouter>
      <Fragment>
        <nav className="main-navigation">
          <Link to="/">Home Page </Link>
          <Link to="search"> Search Page </Link>
          <Link to="member"> Member Page </Link>
        </nav>

        <main className="container">
          <Route exact path="/" component={Home}/>
          <Route path="/member" component={Member}/>
          <Route path="/search" component={Search}/>
        </main>
      </Fragment>
    </HashRouter>,
  document.getElementById('root'));
