import React, { Component } from 'react';

export default class extends Component {
  constructor() {
    super();

  }

  render(){
    return (
        <nav className="navbar">
          <div>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/campuses">home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/students">students</a>
              </li>
            </ul>
         </div>
       </nav>
      )
  }
}


   //                	<div className="container">
   //    			<div className="row justify-content-start">
			// 		<ul className="nav">
			// 			<div className="col-4">
			//   				<li className="nav-item">
			//     				<a className="nav-link active" href="#">home</a>
			//   				</li>
			//   			</div>
			//   			<div className="col-4">
			//   				<li className="col-4 nav-item">
			//     				<a className="nav-link" href="#">students</a>
			//   				</li>
			//   			</div>
			// 		</ul>
			// 	</div>
			// </div>