import React from 'react';
import {Form , Button} from 'react-bootstrap';
function Page3({changeRoute,setText}){
return(
   
<>
    <div className="tl mt5 startPetition mb5">
           <h1>Explain the problem you want to solve</h1>
           <p>{"People are more likely to support your petition if it's clear why you care."}<br/>{"Explain how this change will impact you, your family, or your community."}</p>
    </div>
    <Form className="pr6">
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control placeholder="Describe in details..." onChange={setText} as="textarea" rows={12} />
        </Form.Group>
    </Form>
    <div className="tr">
        <Button onClick={()=>{changeRoute("page4")}} variant="success button-warn grow" className="mt-5 btnn br-5 grow f1 b start-font3" >Continue</Button>
    </div>

</>



);

};

export default Page3;