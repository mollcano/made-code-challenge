import React, { Component } from 'react';
import '../../App.css'
import './form.css'

export default class Form extends Component {
  render(){
    return(
      <div className="form">
        <div className="formContainer">
          <form>
            <label htmlFor="name">First Name</label>
            <input type="text" name="name" defaultValue="Jane" />
            <label htmlFor="job">Job Title</label>
            <input type="text" name="job" defaultValue="Developer" />
            <label htmlFor="birthday">Birthday</label>
            <input type="text" name="birthday" defaultValue="mm/dd/yyyy" />
            <label htmlFor="bio">Bio</label>
            <textarea name="bio" rows="8" cols="10" defaultValue="A few words about yourself"></textarea>
          </form>
        </div>
        <div className="submitContainer">
          <img className="submitButton" src={require("./images/img-save.png")} alt="save" />
        </div>
      </div>
    )
  }
}
