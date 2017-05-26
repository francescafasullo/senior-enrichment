import React, { Component } from 'react';
import Campus from '../components/Campus';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    selected: state.campuses.selected,
    students: state.campuses.students,
    children: ownProps.children
  };
};

const CampusContainer = connect(mapStateToProps)(Campus);

export default CampusContainer;