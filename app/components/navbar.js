import React, { Component } from 'react';

export default class extends Component {
  constructor() {
    super();

  }

  render(){
    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <a className="navbar-brand" href="/home">MHIAJS</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/home">home</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/campuses">campuses</a>
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