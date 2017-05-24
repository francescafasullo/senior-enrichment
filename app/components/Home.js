import React, { Component } from 'react';

export default class extends Component {
  constructor() {
    super();

  }

  render(){
    return (
      <div className="campuses">
        <div className="container">
            <div className="row">
              <div className="col-xs-6">
                <img src="https://static.pexels.com/photos/110854/pexels-photo-110854.jpeg"/>
                <h2>Luna</h2>
              </div>
              <div className="col-xs-6">
                <img src="https://static.pexels.com/photos/110854/pexels-photo-110854.jpeg"/>
                <h2>Terra</h2>
              </div>
            </div>
            <div className="row justify-content-around">
              <div className="col-xs-6">
                <img src="https://static.pexels.com/photos/110854/pexels-photo-110854.jpeg"/>
                <h2>Mars</h2>
              </div>
              <div className="col-xs-6">
                <img src="https://static.pexels.com/photos/110854/pexels-photo-110854.jpeg"/>
                <h2>Titan</h2>
              </div>
            </div>
        </div>
      </div>
      )
  }
}