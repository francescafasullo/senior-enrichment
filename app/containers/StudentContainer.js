import React, { Component } from 'react';
import Student from '../components/Student';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
		console.log('*****', state);
	return {
		selected: state.students.selected,
		children: ownProps.children
	};
};

const StudentContainer = connect(mapStateToProps)(Student);

export default StudentContainer;