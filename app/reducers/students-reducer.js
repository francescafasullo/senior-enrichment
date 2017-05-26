import {
	RECEIVE_STUDENTS,
	RECEIVE_STUDENT,
	CREATE_STUDENT,
	DELETE_STUDENT
} from '../constants';

const initialStudentState = {
	selected: {},
	list: []
};

export default function (state = initialStudentState, action) {
	const newState = Object.assign({}, state);

	switch (action.type) {

		case RECEIVE_STUDENTS:
			newState.list = action.students;
			break;

		case RECEIVE_STUDENT:
			newState.selected = action.student;
			break;

		case CREATE_STUDENT:
			newState.selected = action.student;
			newState.list = action.students;
			break;

		case DELETE_STUDENT:
			newState.list = action.students.filter(student => student.id !== action.id);
			break;

		default:
			return state;
	}

	return newState;
}