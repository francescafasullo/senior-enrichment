import React from 'react';
import { Link } from 'react-router';

const Campus = (props) => {

	const campus = props.selected;
	const students = props.students;

  	return (
  		<div className="campus">
  			<h3>{campus.name}</h3>
  			<ol>
  			{
  				students.map(student => {
  					return (
  						<li key={student.id}>
                <Link to={`/students/${student.id}`}>{ student.name }</Link>      
              </li>
  					)
  				})
  			}
  			</ol>
  		</div>

  	)
 }

export default Campus;