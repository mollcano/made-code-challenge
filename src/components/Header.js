import React, { Component } from 'react';
import '../App.css'

export default class Header extends Component {
  render(){
    return(
      <div className="header">
        <img className="profilePic" src="./images/img-profile.png" alt="profile" />
      </div>
    )
  }
}
