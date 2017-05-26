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
                <h2><a href="/campuses/1">Luna</a></h2>
              </div>
              <div className="col-xs-6">
                <img src="https://static.pexels.com/photos/110854/pexels-photo-110854.jpeg"/>
                <h2><a href="/campuses/2">Terra</a></h2>
              </div>
            </div>
            <div className="row justify-content-around">
              <div className="col-xs-6">
                <img src="https://static.pexels.com/photos/110854/pexels-photo-110854.jpeg"/>
                <h2><a href="/campuses/3">Mars</a></h2>
              </div>
              <div className="col-xs-6">
                <img src="https://static.pexels.com/photos/110854/pexels-photo-110854.jpeg"/>
                <h2><a href="/campuses/4">Titan</a></h2>
              </div>
            </div>
        </div>
      </div>
      )
  }
}