import {RECEIVE_CAMPUSES, RECEIVE_CAMPUS} from '../constants';
import axios from 'axios';

export const receiveCampuses = () => {
	return dispatch => {
		axios.get('/api/campuses')
			.then(response => {
				return dispatch(getCampuses(response.data));
			});
	};
};

export const receiveCampus = (campus, students) => ({
	type: RECEIVE_CAMPUS,
	campus,
	students
});

export const getCampuses = (campuses) => ({
	type: RECEIVE_CAMPUSES,
	campuses
});


export const getCampusById = campusId => {
	return dispatch => {
		Promise
			.all([
				axios.get(`/api/campuses/${campusId}`),
				axios.get(`/api/campuses/${campusId}/students`)
			])
			.then(results => {
				console.log('axios results', results);
				return results.map(r => r.data)
			})
			.then(results => {
				dispatch(receiveCampus(...results));		
			});
		};

	};
