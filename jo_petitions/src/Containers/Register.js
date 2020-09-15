import React, { Component } from "react";
import "./Register.css";
class Register extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <form id="msform">
          <fieldset>
            <h2 class="fs-title">Create your account</h2>
            <input type="text" name="fname" placeholder="First Name" />
            <input type="text" name="lname" placeholder="Last Name" />
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="pass" placeholder="Password" />
            <input
              type="password"
              name="cpass"
              placeholder="Confirm Password"
            />
            <input
              type="button"
              name="submit"
              class="next action-button"
              value="submit"
            />
          </fieldset>
        </form>
      </>
    );
  }
}

export default Register;
