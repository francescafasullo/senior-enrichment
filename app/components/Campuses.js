import React, { Component } from 'react';
import {Link} from 'react-router';

const Campuses = (props) => {
  console.log('campuses props', props);

  const campuses = props.campuses;
  const handleCampusRemove = props.handleCampusRemove;

    return (
    <div className="campuses">
      <div className="container">
        <div className="row">
          <h2>Campuses
              <Link to="/addCampus">
                 <button type="button" className="btn btn-default btn-sm">
                  <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                </button>
              </Link>
          </h2>
        </div>
        <div className="row">
          <p>Our campuses are out of this world! Click a campus to view its students, click the add button to add a new campus, or click the remove button to remove a campus.</p>
          {
            campuses ? campuses.map(campus => {
              return (
                <div className="col clearfix campus-list" key={campus.id}>
                  <Link to={`/campuses/${campus.id}`}>
                  <img src={campus.imageUrl}/>
                  </Link>
                  <div className="campus-remove">
                    <h4>
                      <Link to={`/campuses/${campus.id}`}>{ campus.name }</Link>
                      <button onClick={handleCampusRemove} type="button" className="btn btn-default btn-xs">
                        <span id={campus.id} className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                      </button>
                    </h4>
                  </div>
                </div>
              );
            }) : null
          }
        </div>
      </div>
    </div>
  );
}

export default Campuses;