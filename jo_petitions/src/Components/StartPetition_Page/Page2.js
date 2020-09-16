import React from 'react';
import {Form , Button} from 'react-bootstrap';
import "../../Containers/App.css"
function Page2({changeRoute,setTitle}){
return(
    <>
    <div className="tl mt5 startPetition mb5">
           <h1>Write your petition title</h1>
           <p>{"This is the first thing people will see about your petition."}<br/>{"Get their attention with a short title that focuses on the change you'd like them to support."}</p>
    </div>
    <Form className="pr6">
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control placeholder="Your title.." onChange={setTitle} as="textarea" rows={2} />
        </Form.Group>
    </Form>
    <div className="tr">
        <Button onClick={()=>{changeRoute("page3")}} className="mt-5 btnn br-5 grow f1 b start-font3" variant="success button-warn grow ">Continue</Button>
    </div>

</>
)
};

export default Page2;