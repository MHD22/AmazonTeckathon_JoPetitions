import React, { Component } from "react";
import "./Register.css";
class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email:"",
      password:"",
    };
  }

  onChangeEmail=(event)=>{
    this.setState({email:event.target.value});
  }
  onChangePassword=(event)=>{
    this.setState({password:event.target.value});
  }
  onSubmit=()=>{
    const {email,password}=this.state;
    //get data from data base and compare it with this state
    fetch('https://still-lake-92030.herokuapp.com/signin',{
          method:'post',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            email:email,
            password:password
    
          })}).then(response=>response.json())
          .then(data=>{
            console.log(data);
            if(data){
              this.props.sign(data[0]);
            }
            else{
              console.log('incorrect information !')}

          }).catch(e=>{console.log("errororooro")})

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
