import React from 'react';
import { Link } from 'react-router';

const Student = (props) => {
	console.log('~~~~~', props);
	const student = props.selected;

	return (

		<div className="student">
			<h3>{student.name}</h3>
			<ul>
				<li>Email: {student.email}</li>
				<li>Campus: {student.campus.name}</li>
			</ul>
		</div>
	)	
}

export default Student;