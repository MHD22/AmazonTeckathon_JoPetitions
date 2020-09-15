import React, { Component } from "react";
import "./Register.css";
class SignIn extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <form id="msform">
          <fieldset>
            <h2 class="fs-title">Sign In</h2>
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="pass" placeholder="Password" />

            <input
              type="button"
              name="Sign in"
              class="next action-button"
              value="Sign in"
            />
          </fieldset>
        </form>
      </>
    );
  }
}

export default SignIn;
