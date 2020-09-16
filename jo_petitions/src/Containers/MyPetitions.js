import React, { Component } from 'react';
import {Container, Nav} from 'react-bootstrap';
import Petition from '../Components/HomePage/Petition';


class MyPetitions extends Component{
    constructor(){
        super();
        this.state={

        }

    }
    componentDidMount(){
        this.mypets();
    }
      supported=()=>{
        fetch('http://localhost:5000/mys',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
              userID:this.props.id
      
            })
          })
          .then(res=>res.json())
          .then(data=>{
              this.props.changePetitions(data)
          }).catch(e=>{"error in my supported "})
        }
        mypets=()=>{
            fetch('http://localhost:5000/myp',{
                method:'post',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                  userID:this.props.id
          
                })
              })
              .then(res=>res.json())
              .then(data=>{
                  this.props.changePetitions(data)
              }).catch(e=>{"error in my petitions "})
            }
    render(){
        const {data,route,changeRoute,readPetition}=this.props;
        const petList= data.map((item)=>{
            return (<Petition data={item} key={item.id} route={route} readPetition={readPetition} changeRoute={changeRoute}/>)
          })
        return(
            <Container>
                <div className="mt5 tl pl5">

                <h1 className="disc">{"My petitions"}</h1>
                <Nav className="mt4 " variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link onClick={this.mypets} eventKey="link-0" >My petitions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={this.supported} eventKey="link-1">Supported</Nav.Link>
                </Nav.Item>
                </Nav>
                </div>
                <hr></hr>
                {petList}
            </Container>
        );

    }
}

export default MyPetitions;