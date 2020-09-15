import React, { Component  } from 'react';
import './App.css';
import Navbar from '../Components/HomePage/Navbar';
import Start from '../Components/HomePage/Start';
import Slider from '../Components/HomePage/Slider';
import News from '../Components/HomePage/News';
import Footer from '../Components/HomePage/Footer';
import Discover from '../Components/Browse page/Discover';
import StartPetition from '../Components/StartPetition_Page/StartPetition';
import {Container} from 'react-bootstrap';


class App extends Component {
  constructor(){
    super();
    this.state={
      route:'home'
    };
  }
  
  
  render(){
    const {route} = this.state;
    
  return (
    <div className="App">
      
      <Navbar/>
      {route==='home'?( <>
      <Start/>
      <Container>
      <Slider/>
      <News route={route}/> 
      </Container> </>):
      // end of home page 
      route==='browse'?(<>
      <Container>
      <Discover/>
      <News route={route}/>
      </Container>
       </>):
       (<>
       <Container>
         <StartPetition/>
       </Container>
       </>)}
      <Footer/>
      
    </div>
  );
}
}

export default App;
