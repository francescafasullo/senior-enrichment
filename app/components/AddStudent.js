import React from 'react';
import Campuses from './Campuses';

export default function AddStudent(props) {
	const campuses = props.campuses;
	const students = props.students;
	const handleSubmit = props.handleSubmit;

	return (

		<div>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Name</label>
					<input type="text" className="form-control" id="inputName" placeholder="Enter a name" />
				</div>
				<div className="form-group">
					<label>Email</label>
					<input type="email" className="form-control" id="inputEmail" placeholder="Enter an email" />
				</div>
				<div className="form-group">
					<label>Campus</label>
					<select className="form-control" id="campusSelect">
						{
							campuses.map(campus => {
							return (
								<option value={campus.id} key={campus.id}>{campus.name}</option>
							)
						})
						}
					</select>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		</div>

	)
}