import React, { Component } from 'react';
import '../App.css'

export default class Nav extends Component {
  render(){
    return(
      <div className="navCont">
        <div className="nav">
          <img className="hamburger" src="./images/icon-hamburger-nav.png" alt="navigation icon" />
          <p className="profileText">Profile</p>
        </div>
      </div>
    )
  }
}
