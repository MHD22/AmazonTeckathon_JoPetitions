import React, { Component } from 'react';
import {Container, Nav} from 'react-bootstrap';
import Petition from '../Components/HomePage/Petition';


class MyPetitions extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        console.log(this.props.data)
        return(
            <Container>
                <div className="mt5 tl pl5">

                <h1 className="disc">{"My petitions"}</h1>
                <Nav className="mt4 " variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link  eventKey="link-0">My petitions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Supported</Nav.Link>
                </Nav.Item>
                </Nav>
                </div>
                <hr></hr>
                <Petition data={this.props.data} readPetition={this.props.readPetition} />
            </Container>
        );

    }
}

export default MyPetitions;