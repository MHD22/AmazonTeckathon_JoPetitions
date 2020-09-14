import React, { Component } from 'react';
import './App.css';
import Navbar from '../Components/HomePage/Navbar';
import Start from '../Components/HomePage/Start';
import Slider from '../Components/HomePage/Slider';
import News from '../Components/HomePage/News';
import Footer from '../Components/HomePage/Footer';


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
      <Slider/>
      <News/>
      <Footer/>
      
    </div>
  );
}
}

export default App;
