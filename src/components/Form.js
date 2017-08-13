import React, { Component } from 'react';
import '../App.css'

export default class Form extends Component {
  render(){
    return(
      <div className="form">
        <form>
          <label for="name">First Name</label>
          <input type="text" name="name" value="Jane" />
          <label for="job">Job Title</label>
          <input type="text" name="job" value="Developer" />
          <label for="birthday">Birthday</label>
          <input type="text" name="birthday" value="mm/dd/yyyy" />
          <label for="bio">Bio</label>
          <textarea name="bio" rows="8" cols="10">A few words about yourself</textarea>
        </form>
        <div className="submit">
          <img className="submitButton" src="./images/img-save.png" alt="save" />
        </div>
      </div>
    )
  }
}
