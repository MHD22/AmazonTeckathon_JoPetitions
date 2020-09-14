import React, { Component } from 'react';
import './App.css';
import Navbar from '../Components/HomePage/Navbar';
import Start from '../Components/HomePage/Start';
import Slider from '../Components/HomePage/Slider';
import News from '../Components/HomePage/News';
import Footer from '../Components/HomePage/Footer';
import {Container} from 'react-bootstrap';


class App extends Component {
  constructor(){
    super();
    this.state={};
  }
  
  
  render(){
  return (
    <div className="App">
      
      <Navbar/>
      <Start/>
      <Container>
      <Slider/>
      <News/>
      </Container>
      <Footer/>
      
    </div>
  );
}
}

export default App;
