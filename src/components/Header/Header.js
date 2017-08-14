import React, { Component } from 'react';
import '../../App.css'
import './header.css'

export default class Header extends Component {
  render(){
    return(
      <div className="header">
        <img className="background" src={require("./images/bkg-header.jpg")} alt=""/>
        <img className="profilePic" src={require("./images/img-profile.png")} alt="profile" />
      </div>
    )
  }
}
