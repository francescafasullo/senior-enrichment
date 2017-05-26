'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddCampus from '../components/AddCampus';
import { addCampus } from '../action-creators/campuses';

const mapStateToProps = state => {
	const students = state.students;
	return {
		campuses: state.campuses.list,
		students: students.list
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		addCampus(name, imageUrl) {
			dispatch(addCampus(name, imageUrl));
		}
	};
};

class AddCampusContainer extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const name = event.target.inputCampusName.value;
		const imageUrl = event.target.inputCampusImageUrl.value;
		console.log('props', this.props);
		this.props.addCampus(name, imageUrl);
	}

	render () {
		return (
			<AddCampus
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
)(AddCampusContainer);