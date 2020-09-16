import React from 'react';
import {Form , Button} from 'react-bootstrap';
function Page4({changeRoute,setPhoto}){
return(
    <>
    <div className="tl mt5 startPetition mb5">
           <h1>Add a photo</h1>
           <p>{"Petitions with a photo receive five times more signatures than those without."}<br/>{"Include one that captures the emotion of your story."}</p>
    </div>
    <Form className="pr6">
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control placeholder="http://yourImagelink.com" onChange={setPhoto} as="input" />
        </Form.Group>
    </Form>
    <div className="tr">
        <Button onClick={()=>{changeRoute("home")}} className="mt-5 btnn br-5 grow f1 b start-font3" variant="success button-warn grow" >Save And Post</Button>
    </div>

</>
);

};

export default Page4;