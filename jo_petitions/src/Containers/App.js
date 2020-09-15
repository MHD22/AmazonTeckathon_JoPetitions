import React, { Component } from "react";
import "./App.css";
import Navbar from "../Components/HomePage/Navbar";
import Start from "../Components/HomePage/Start";
import Slider from "../Components/HomePage/Slider";
import News from "../Components/HomePage/News";
import Footer from "../Components/HomePage/Footer";
import Discover from "../Components/Browse page/Discover";
import SignIn from "./SignIn";
import Register from './Register';
import StartPetition from "../Components/StartPetition_Page/StartPetition";
import { Container } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state={
      route:'start',

      user:{
        name:"",
        petitions:[],
      }

      
  }}
  changeRoute=(r)=>{
    this.setState({route:r});
  }

  render() {
    const { route } = this.state;

    return (
      <div className="App">
        <div className="content-warp">
          <Navbar />
          <div className="container-above">
            
          {route === "home" ? (
            <>
              <Start />
              <Container>
                <Slider />
                <News route={route} />
              </Container>{" "}
            </>
          ) : // end of home page
          route === "browse" ? (
            <>
              <Container>
                <Discover />
                <News route={route} />
              </Container>
            </>
          ) : route==='start'? (
            <>
              <Container>
                <StartPetition changeRoute={this.changeRoute} />
              </Container>
            </>)
            : route==='sign in'? (<SignIn />)
            : route ==='register'? (<Register />)
            : null  
        
        }
        </div>
        <Footer />
      </div>
          </div>
    );
  }
}

export default App;
