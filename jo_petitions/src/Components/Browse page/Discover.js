import React from 'react';
import {Nav} from 'react-bootstrap';

function Discover(){
    return(
    <div className="mt5 tl pl5">

            <h1 className="disc">{"Discover petitions"}</h1>
            <Nav className="mt4 " variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link  eventKey="link-0">Popular</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Recent</Nav.Link>
            </Nav.Item>
            </Nav>
    </div>);
}
export default Discover;