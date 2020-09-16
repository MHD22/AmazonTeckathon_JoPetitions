import React from 'react';
import {Nav} from 'react-bootstrap';

function Discover({changePetitions}){
  const  popular=()=>{
    fetch('https://still-lake-92030.herokuapp.com/browsep')
    .then(response=> response.json())
    .then(data=>{
      changePetitions(data);
    }).catch("error in discover popular")
    }

    const  recent=()=>{
        fetch('https://still-lake-92030.herokuapp.com/browser')
        .then(response=> response.json())
        .then(data=>{
          changePetitions(data);
        }).catch("error in discover recent")
        }


    return(
    <div className="mt5 tl pl5">

            <h1 className="disc">{"Discover petitions"}</h1>
            <Nav className="mt4 " variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link onClick={popular} eventKey="link-0">Popular</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={recent} eventKey="link-1">Recent</Nav.Link>
            </Nav.Item>
            </Nav>
    </div>);
}
export default Discover;