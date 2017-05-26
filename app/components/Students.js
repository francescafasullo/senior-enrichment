import React from 'react';
import { Link } from 'react-router';

const Students = (props) => {
	const students = props.students;
	const handleRemove = props.handleRemove;

	return (

		<div>
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
			            students.map(student => {
			              return (
			                <tr key={student.id}>
			                	<th scope="row">{student.id}</th>
			                	<td>{student.name}</td>
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
			            })
			         }
      			</tbody>
      		</table>
      		<div className="addStudent">
	      		<Link to="/students/addStudent">
	      			<button type="button" className="btn btn-default btn-sm">
	      				<span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
	      			</button>
	      		</Link>
      		</div>
      	</div>

	)
}

export default Students;