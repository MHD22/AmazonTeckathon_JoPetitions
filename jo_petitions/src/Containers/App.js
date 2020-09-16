import React, { Component } from "react";
import "./App.css";
import Navbar from "../Components/HomePage/Navbar";
import Start from "../Components/HomePage/Start";
import Slider from "../Components/HomePage/Slider";
import News from "../Components/HomePage/News";
import Footer from "../Components/HomePage/Footer";
import Discover from "../Components/Browse page/Discover";
import MyPetitions from "./MyPetitions";
import SignIn from "./SignIn";
import Register from './Register';
import ReadPetition from './ReadPetition';
import StartPetition from "../Components/StartPetition_Page/StartPetition";
import { Container } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state={
      route:'home',

      user:{
        name:"Mohammad",
      },
      petition:{
        title:"title1",
        text:"this is my petition about something to solve",
        photo:"https://images.unsplash.com/photo-1599687266394-00d0dba159bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        supports:0,
        date: Date.now(),
      },
      oldRoute:"",

      
  }}
  readPetition=(petData)=>{
    const {title,text,photo,supports,date,name,route}= petData;
    const pet={title,text,photo,supports,date};
    const user={name:name};
    this.setState({route:'read',petition:pet , user:user , oldRoute:route});
  }
  changeRoute=(r)=>{
    this.setState({route:r});
  }
  setPet =(data)=>{
    this.setState({petition:{...this.state.petition,title:data.title,text:data.text,photo:data.photo}})
  }
  register=(n)=>{
    const user={...this.state.user, name:n};
    this.setState({user:user,route:'sign in' });
//i think don't need to send name to here ,, just from sign in 
  }
  sign=(n)=>{
    const user={...this.state.user, name:n};
    this.setState({user:user,route:'home' });
  }

  render() {
    const { route,oldRoute } = this.state;
    const {title,text,photo,supports,date}=this.state.petition;
    const {name}=this.state.user;
    const pet={title,text,photo,supports,date,name,route,oldRoute};
    return (
      <div className="App">
        <div className="content-warp">
          <Navbar changeRoute={this.changeRoute} />
          <div className="container-above">
            
          {route === "home" ? (
            <>
              <Start changeRoute={this.changeRoute} />
              <Container>
                <Slider />
                <News route={route} 
                      data={pet}
                      readPetition={this.readPetition}
                      changeRoute={this.changeRoute}/>
              </Container>
            </>
          ) : // end of home page
          route === "browse" ? (
            <>
              <Container>
                <Discover />
                <News route={route} 
                      data={pet}
                      readPetition={this.readPetition}/>
              </Container>
            </>
          ) : route==='start'? (
            <>
              <Container>
                <StartPetition changeRoute={this.changeRoute}
                              setPet={this.setPet} />
              </Container>
            </>)
            : route==='sign in'? (<SignIn  sign={this.sign}/>)
            : route ==='register'? (<Register register={this.register} />)
            : route ==='my petitions'?
            (<MyPetitions data={pet}
                         readPetition={this.readPetition}/>)
            :route==="read"? (<ReadPetition data={pet} changeRoute={this.changeRoute}/>)
            : null  }
        
        
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
