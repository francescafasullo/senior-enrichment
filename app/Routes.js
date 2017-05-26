import React from 'react';
import {connect, Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory, IndexRedirect} from 'react-router';
import Campus from './containers/CampusContainer';
import Campuses from './containers/CampusesContainer';
import Students from './containers/StudentsContainer';
import Student from './containers/StudentContainer';
import AddStudent from './containers/AddStudentContainer';
import AddCampus from './containers/AddCampusContainer';
import Home from './components/Home';
import navbar from './components/navbar';
import Root from './components/Root';
import {render} from 'react-dom';
import store from './store';

import { receiveCampuses, getCampusById } from './action-creators/campuses';
import { receiveStudents, getStudentById } from './action-creators/students';

const Routes = () => (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Root}>
				<Route path="home" component={Home} />
				<Route path="campuses" component={Campuses} onEnter={onCampusesEnter} />
				<Route path="campuses/:id" component={Campus} onEnter={onCampusEnter}/>
				<Route path="addCampus" component={AddCampus} />
				<Route path="students" component={Students} onEnter={onStudentsEnter} />
				<Route path="students/:id" component={Student} onEnter={onStudentEnter} />
				<Route path="addStudent" component={AddStudent} onEnter={onAddStudentEnter} />
				<IndexRedirect to="home" />
			</Route>
		</Router>
	</Provider>
	)


const onCampusesEnter = function(nextRouterState) {
	store.dispatch(receiveCampuses());
};

const onCampusEnter = function(nextRouterState) {
	const campusId = nextRouterState.params.id;
	store.dispatch(getCampusById(campusId));
};

const onStudentsEnter = function(nextRouterState) {
	store.dispatch(receiveStudents());
}

const onStudentEnter = function(nextRouterState) {
	console.log(nextRouterState);
	const studentId = nextRouterState.params.id;
	store.dispatch(getStudentById(studentId));
}

const onAddStudentEnter = function(nextRouterState) {
	store.dispatch(receiveStudents());
	store.dispatch(receiveCampuses());
}

export default Routes;