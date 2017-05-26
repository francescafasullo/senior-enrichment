import React, { Component } from 'react';
import Navbar from './navbar.js';
import Campuses from '../containers/CampusesContainer.js';
import Home from './Home';

const Root = ({ children }) => (
  <div id="main" className="container-fluid">
    <Navbar />
    { children }
  </div>
);

export default Root;