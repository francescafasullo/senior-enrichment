import {
  RECEIVE_CAMPUSES,
  RECEIVE_CAMPUS,
  CREATE_CAMPUS,
  DELETE_CAMPUS
} from '../constants';

const initialCampusState = {
  selected: {},
  list: [],
  students: []
};

export default function (state = initialCampusState, action) {

	const newState = Object.assign({}, state);

	switch (action.type) {

		case RECEIVE_CAMPUSES:
			newState.list = action.campuses;
			break;

		case RECEIVE_CAMPUS:
			newState.selected = action.campus;
			newState.students = action.students;
			break;

		case CREATE_CAMPUS:
			newState.list = action.campuses;
			break;

		case DELETE_CAMPUS:
			newState.list = action.campuses.filter(campus => campus.id !== action.id);
			break;


		default:
			return state;
	}

	return newState;
}