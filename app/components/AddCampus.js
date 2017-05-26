import React from 'react';

export default function AddCampus(props) {
	const handleSubmit = props.handleSubmit;

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Campus Name</label>
					<input type="text" className="form-control" id="inputCampusName" placeholder="Enter a campus name" />
				</div>
				<div className="form-group">
					<label>Campus Image</label>
					<input type="text" className="form-control" id="inputCampusImageUrl" placeholder="Enter an image URL" />
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		</div>
	)
}