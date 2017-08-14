import React, { Component } from 'react';
import '../../App.css'
import './nav.css'

export default class Nav extends Component {
  render(){
    return(
      <div className="navCont">
        <div className="nav">
          <img className="hamburger" src={require("./images/icon-hamburger-nav.png")} alt="navigation icon" />
        </div>
        <div className="profileContainer">
          <p className="profileText">Profile</p>
        </div>
      </div>
    )
  }
}
