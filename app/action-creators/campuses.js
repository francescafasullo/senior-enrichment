import {RECEIVE_CAMPUSES, RECEIVE_CAMPUS, CREATE_CAMPUS, DELETE_CAMPUS} from '../constants';
import axios from 'axios';
import { browserHistory } from 'react-router';

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
				return results.map(r => r.data)
			})
			.then(results => {
				dispatch(receiveCampus(...results));		
			});
		};

	};

export const createCampus = campus => ({
	type: CREATE_CAMPUS,
	campus
})

export const addCampus = (name, imageUrl) => {
	return (dispatch, getState) => {
		return axios.post('/api/addCampus', {
			name: name,
			imageUrl: imageUrl
		})
		.then(res => res.data)
		.then(campus => {
			dispatch(createCampus(campus));
			return campus;
		})
		.then(campus => {
			browserHistory.push('/campuses');
		});
	};
};

export const deleteCampus = (id, campuses) => ({
	type: DELETE_CAMPUS,
	id,
	campuses
})

export const removeCampus = (id, campuses) => dispatch => {
	dispatch(deleteCampus(id, campuses));
	axios.delete(`/api/campuses/${id}`)
		.catch(err => console.error(`Removing campus: ${id} unsuccessful`, err));
}