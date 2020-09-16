import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
function Start({changeRoute}) {
  return (
    <Jumbotron className="shadow-2 jumb">
      <h1 className="f1 b mb4 ">{"The Jordanian platform for change"}</h1>
      <p>{"Alot of peapole taking action. Victories every day"}</p>
      <p>
        <Button onClick={()=>{changeRoute('start')}} className="mt-4 btnn br-5 grow f1 b" variant="success">
          {"Start a petition"}
        </Button>
      </p>
    </Jumbotron>
  );
}

export default Start;
