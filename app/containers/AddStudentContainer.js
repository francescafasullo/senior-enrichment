'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddStudent from '../components/AddStudent';
import { addStudent, receiveStudents } from '../action-creators/students';

const mapStateToProps = state => {
	const students = state.students;
	return {
		campuses: state.campuses.list,
		students: students.list
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		addStudent(name, email, campus) {
			dispatch(addStudent(name, email, campus));
		},
		receiveStudents() {
			dispatch(receiveStudents());
		}
	};
};

class AddStudentContainer extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleSubmit(event) {
		event.preventDefault();
		const name = event.target.inputName.value;
		const email = event.target.inputEmail.value;
		const campus = event.target.campusSelect.value;
		this.props.addStudent(name, email, campus);
	}

	render() {
		return (
			<AddStudent
				{...this.state}
				{...this.props}
				handleSubmit={this.handleSubmit}
			/>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddStudentContainer);