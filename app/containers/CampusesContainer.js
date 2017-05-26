import React, { Component } from 'react';
import Campuses from '../components/Campuses';
import { connect } from 'react-redux';
import { removeCampus, receiveCampuses } from '../action-creators/campuses';

const mapStateToProps = (state) => {
  const campuses = state.campuses;

  return {
    campuses: campuses.list
  };
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeCampus(id, campuses) {
			dispatch(removeCampus(id, campuses));
		},
		receiveCampuses() {
			dispatch(receiveCampuses());
		}
	};
};

class CampusesContainer extends Component {
	constructor(props) {
		super(props);
		this.handleCampusRemove = this.handleCampusRemove.bind(this);
	}

	handleCampusRemove(event) {
		event.preventDefault();
		const id = event.target.id;
		this.props.removeCampus(id, this.props.campuses);
		this.props.receiveCampuses();
	}

	render() {
		return (
			<Campuses
				{...this.state}
				{...this.props}
				handleCampusRemove={this.handleCampusRemove}
			/>
		)
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampusesContainer);