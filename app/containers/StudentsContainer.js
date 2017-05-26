import React, { Component } from 'react';
import Students from '../components/Students';
import { connect } from 'react-redux';
import { removeStudent, receiveStudents } from '../action-creators/students';

const mapStateToProps = (state) => {
  	const students = state.students;

  return {
    students: students.list
  };
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeStudent(id, students) {
			dispatch(removeStudent(id, students));
		},
		receiveStudents() {
			dispatch(receiveStudents());
		}
	};
};

class StudentsContainer extends Component {
	constructor(props) {
		super(props);
		this.handleRemove = this.handleRemove.bind(this);
	}

	handleRemove(event) {
		event.preventDefault();
		const id = event.target.id;
		this.props.removeStudent(id, this.props.students);
		this.props.receiveStudents();
	}

	render() {
		return (
			<Students
				{...this.state}
				{...this.props}
				handleRemove={this.handleRemove}
			/>
		)
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentsContainer);