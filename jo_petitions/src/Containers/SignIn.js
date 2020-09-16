import React, { Component } from "react";
import "./Register.css";
class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email:"",
      password:"123",
    };
  }

  onChangeEmail=(event)=>{
    this.setState({email:event.target.value});
  }
  onChangePassword=(event)=>{
    this.setState({password:event.target.value});
  }
  onSubmit=()=>{
    //get data from data base and compare it with this state
    
    if(this.state.email==="mohammad" && this.state.password==='123'){

      const name ="temp name"//from data base
      this.props.sign(name);

    }

  }
  render() {
    return (
      <>
        <form id="msform">
          <fieldset className="">
            <h2 class="fs-title">Sign In</h2>
            <input onChange={this.onChangeEmail} type="text" name="email" placeholder="Email" />
            <input onChange={this.onChangePassword} type="password" name="pass" placeholder="Password" />

            <input
              onClick={this.onSubmit}
              type="button"
              name="Sign in"
              class="next action-button grow"
              value="Sign in"
            />
          </fieldset>
        </form>
      </>
    );
  }
}

export default SignIn;
