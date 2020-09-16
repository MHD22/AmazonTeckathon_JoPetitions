import React, { Component } from "react";
import "./Register.css";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      rePass:""
    };
  }
  onChangeFirstName=(event)=>{
    this.setState({firstName:event.target.value});
  }
  onChangeLastName=(event)=>{
    this.setState({lastName:event.target.value});
  }
  onChangeEmail=(event)=>{
    this.setState({email:event.target.value});
  }
  onChangePassword=(event)=>{
    this.setState({password:event.target.value});
  }
  onChangeRePassword=(event)=>{
    this.setState({rePass:event.target.value});
  }
  onSubmit=()=>{
    const{firstName,lastName,email,password,rePass}=this.state;
    
    if(firstName !=="" &&
       lastName  !=="" &&
       password !==""  &&
       rePass   !==""  &&
       password === rePass){
         //send to data base .. 
        fetch('http://localhost:5000/register',{
          method:'post',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
    
          })}).then(res=>res.json())
          .then(data=>{
            this.props.register(data);
          })

     
       }

  }
  render() {
    return (
      <>
        <form id="msform">
          <fieldset>
            <h2 class="fs-title">Create your account</h2>
            <input onChange={this.onChangeFirstName} type="text" name="fname" placeholder="First Name" />
            <input onChange={this.onChangeLastName} type="text" name="lname" placeholder="Last Name" />
            <input onChange={this.onChangeEmail} type="text" name="email" placeholder="Email" />
            <input onChange={this.onChangePassword} type="password" name="pass" placeholder="Password" />
            <input
              onChange={this.onChangeRePassword}
              type="password"
              name="cpass"
              placeholder="Confirm Password"
            />
            <input
              onClick={this.onSubmit}
              type="button"
              name="submit"
              className="next action-button  grow"
              value="submit"
            />
          </fieldset>
        </form>
      </>
    );
  }
}

export default Register;
