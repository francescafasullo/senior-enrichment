import {RECEIVE_STUDENTS, RECEIVE_STUDENT, CREATE_STUDENT, DELETE_STUDENT} from '../constants';
import axios from 'axios';
import { browserHistory } from 'react-router';

export const receiveStudents = () => {
	return dispatch => {
		axios.get('/api/students')
			.then(response => {
				return dispatch(getStudents(response.data));
			});
	};
};

export const receiveStudent = (student) => ({
	type: RECEIVE_STUDENT,
	student
});

export const getStudents = (students) => ({
	type: RECEIVE_STUDENTS,
	students
});


export const getStudentById = studentId => {
	return dispatch => {
		axios.get(`/api/students/${studentId}`)
		.then(result => result.data)
		.then(student => {
			dispatch(receiveStudent(student));
		})
	}
};

export const createStudent = student => ({
	type: CREATE_STUDENT,
	student
})

export const addStudent = (name, email, campus) => {
	return (dispatch, getState) => {

		return axios.post('/api/addStudent', {
			name: name,
			email: email,
			campusId: campus
		})
		.then(res => res.data)
		.then(student => {
			dispatch(createStudent(student));
			return student;
		})
		.then(student => {
			browserHistory.push('/students');
		});
	};
};

export const deleteStudent = (id, students) => ({
	type: DELETE_STUDENT,
	id,
	students
})

export const removeStudent = (id, students) => dispatch => {
	dispatch(deleteStudent(id, students));
	axios.delete(`/api/students/${id}`)
		.catch(err => console.error(`Removing student: ${id} unsuccessful`, err));
}