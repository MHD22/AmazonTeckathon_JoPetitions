import React from 'react';
import {Row, Col , Button} from 'react-bootstrap';
function Page1(){
return(
        <>

       <div className="tc mt5 startPetition mb5">
           <h1>What kind of issue are you petitioning on?</h1>
           <p>selecting a topic allows JO Petitions to recommend your petition to interested supporters.</p>
       </div>
       <Row>
        <Col NumberAttr={6}>
        <div className="tc link pointer grow">
        <div className="icon-container">
            <br/><br/>
        <i class="fas fa-map-marker-alt f1"></i>
        </div>
        <p>Local</p>
        </div>
        </Col>

        <Col>
        <div className="tc   link pointer grow">
        <div className="icon-container">
            <br/><br/>
            <i class="fas f1 fa-heartbeat"></i>
        </div>
        <p>Health</p>
        </div>
        </Col>
        <Col>
        <div className="tc  link pointer grow">
        <div className="icon-container">
            <br/><br/>
            <i class="fas f1 fa-users"></i>
        </div>
        <p>Human rights</p>
        </div>
        </Col>
        <Col>
        <div className="tc link pointer grow">
        <div className="icon-container">
            <br/><br/>
            <i class="fas f1 fa-money-check-alt"></i>
        </div>
        <p>Economic</p>
        </div>
        </Col>
       </Row>


       {/* second row  */}

       <Row>
        <Col NumberAttr={6}>
        <div className="tc link pointer grow">
        <div className="icon-container">
            <br/><br/>
            <i class="fas f1 fa-vote-yea"></i>
        </div>
        <p>Politics</p>
        </div>
        </Col>

        <Col>
        <div className="tc link pointer grow">
        <div className="icon-container">
            <br/><br/>
            <i class="fas f1  fa-paw"></i>
        </div>
        <p>Animals</p>
        </div>
        </Col>
        <Col>
        <div className="tc link pointer grow">
        <div className="icon-container">
            <br/><br/>
            <i class="fas f1 fa-female"></i>
        </div>
        <p>Women's rights</p>
        </div>
        </Col>
        <Col>
        <div className="tc link pointer grow">
        <div className="icon-container">
            <br/><br/>
            <i class="fab f1 fa-envira"></i>
        </div>
        <p>Environment</p>
        </div>
        </Col>
       </Row>

       {/* third row */}
       <Row>
        <Col NumberAttr={6}>
        <div className="tc link pointer grow">
        <div className="icon-container">
            <br/><br/>
            <i class="fas f1 fa-user-friends"></i>
        </div>
        <p>Family</p>
        </div>
        </Col>

        <Col>
        <div className="tc link pointer grow">
        <div className="icon-container">
            <br/><br/>
            <i class="fas f1 fa-balance-scale-right"></i>
        </div>
        <p>Crinimal justice</p>
        </div>
        </Col>
        <Col>
        <div className="tc link pointer grow">
        <div className="icon-container">
            <br/><br/>
            <i class="fas f1 fa-graduation-cap"></i>
        </div>
        <p>Education</p>
        </div>
        </Col>
        <Col>
        <div className="tc link pointer grow">
        <div className="icon-container">
            <br/><br/>
            <i class="fas f1 fa-question"></i>
        </div>
        <p>Other</p>
        </div>
        </Col>
       </Row>
       <div className="tr">
       <Button variant="warning button-warn grow" >Continue</Button>
       </div>
       </>
   
);

};

export default Page1;