import React, { Component } from 'react';
import {Link} from 'react-router';

const Campuses = (props) => {

  const campuses = props.campuses;

    return (
    <div>
      <h3>Campuses</h3>
      <div className="container campuses">
        <div className="row">
          {
            campuses.map(campus => {
              return (
                <div className="col-xs-6" key={campus.id}>
                  <img src={campus.imageUrl}/>
                  <Link to={`/campuses/${campus.id}`}>{ campus.name }</Link>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Campuses;