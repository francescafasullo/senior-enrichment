import React, { Component } from 'react';
import Campuses from '../components/Campuses';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const campuses = state.campuses;

  return {
    campuses: campuses.list
  };
};

export default connect(
  mapStateToProps
)(Campuses);