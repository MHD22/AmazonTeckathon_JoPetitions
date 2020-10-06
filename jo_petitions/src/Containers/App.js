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
      route:'sign in',

      user:{
        // name: this.state.user.firstName+' '+ this.state.user.lastName,
        id:'10',
        firstName:' ',
        lastName:' ',
        email:' ',
        password:' ',
        name:'',
        

        
      },
      petition:{
        title:"",
        text:"",
        photo:"",
        supports:0,
        name:'',
       
      },
      petitions:[],
      oldRoute:"",

      
  }}
  readPetition=(petData)=>{
    const {title,text,photo,supports,name,route}= petData;
    const pet={title,text,photo,supports,name};
   
    this.setState({route:'read',petition:pet  , oldRoute:route});
  }
  changeRoute=(r)=>{
    this.setState({route:r});
  }
  setPet =(data)=>{
    fetch('https://still-lake-92030.herokuapp.com/postpet',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        title:data.title,
        text:data.text,
        photo:data.photo,
        user:this.state.user.id

      })
    })
   
  }
  register=(n)=>{
    this.setState({route:'sign in' });
  }
  sign=(n)=>{
    const name = n.firstName + " "+n.lastName;
    n.name=name;
    
    this.setState({user:n,route:'home' });
  }
  componentDidMount(){
    fetch('https://still-lake-92030.herokuapp.com/browsep')
    .then(response=> response.json())
    .then(data=>{
      console.log(data);
      this.setState({petitions:data});
    })
  }
  changePetitions=(pets)=>{
    this.setState({petitions:pets});
  }

  render() {
    const { route,oldRoute } = this.state;
    const {title,text,photo,supports,name}=this.state.petition;
    const {id}=this.state.user;
    const pets=this.state.petitions;//popular without user id or name 
    const pet={title,text,photo,supports,id,name,route,oldRoute};
    return (
      <div className="App">
        <div className="content-warp">
          <Navbar changeRoute={this.changeRoute} />
          <div className="container-above">
            
          {route === "home" ? (
            <>
              <Start changeRoute={this.changeRoute} />
              <Container>
                <Slider changeRoute={this.changeRoute}/>
                <News route={route} 
                      data={pets}
                      readPetition={this.readPetition}
                      changeRoute={this.changeRoute}/>
              </Container>
            </>
          ) : // end of home page
          route === "browse" ? (
            <>
              <Container>
                <Discover changePetitions={this.changePetitions} />
                <News route={route} 
                      data={pets}
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
            (<MyPetitions data={pets}
                          id={id}
                          route={route}
                          changeRoute={this.changeRoute}
                          changePetitions={this.changePetitions}
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
