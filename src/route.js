import React, {Component} from 'react';

import NameForm from './form';
import Tgrid from './Tgrid';
import Head from './header';
import AboutMe from './aboutme';
import './header.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const AppRoute = () => (
  <Router>
    <div>
      <div className="routeNav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Products</Link></li>
        <li><Link to="/about">About Me</Link></li>
      </ul>
      </div>
      <div className="clear"></div>
      <div className="mainContent">
      <Route exact path="/" component={Tgrid}/>
      <Route path="/add" component={NameForm}/>
      <Route path="/edit/:id" component={NameForm}/>
      <Route path="/about" component={AboutMe}/>
    	</div>
    </div>
  </Router>
)

export default AppRoute;