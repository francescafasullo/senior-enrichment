import React from 'react';
import { Link } from 'react-router';

const Students = (props) => {
	console.log('Students component props', props);
	const students = props.students;
	const handleRemove = props.handleRemove;

	return (

		<div className="students-list">
			<div className="container">
				<div className="row">
			      	<div className="addStudent">
						<h2>Students
				      		<Link to="/addStudent">
				      			<button type="button" className="btn btn-default btn-sm">
				      				<span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
				      			</button>
				      		</Link>
			      		</h2>
			      	</div>
			    </div>
	      	</div>
		
      		<table className="table">
      			<thead>
      				<tr>
      					<th>#</th>
      					<th>name</th>
      					<th>campus</th>
      					<th className="remove"></th>
      				</tr>
      			</thead>
      			<tbody>
			      	{
			            students ? students.map(student => {
			              return (
			                <tr key={student.id}>
			                	<th scope="row">{student.id}</th>
			                	<td>
			                		<Link to={`/students/${student.id}`}>
			                			{student.name}
			                		</Link>
			                	</td>
			                	<td>
				                	<Link to={`/campuses/${student.campus.id}`}>
				                	{student.campus.name}
				                	</Link>	
				                </td>		                	
				                <td>
				                		<button onClick={handleRemove} type="button" className="btn btn-default btn-xs">
	  										<span id={student.id} className="glyphicon glyphicon-remove" aria-hidden="true"></span>
										</button>
			                	</td>
			                </tr>
			              );
			            }) : null
			         }
      			</tbody>
      		</table>
      	</div>

	)
}

export default Students;