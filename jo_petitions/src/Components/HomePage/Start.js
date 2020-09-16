import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
function Start({changeRoute}) {
  return (
    <Jumbotron className="shadow-2 jumb  start-font">
      <h1 className="f1 b mb4 ">{"The Jordanian platform for change"}</h1>
      <p className="f3 start-font2">{"Alot of peapole taking action."}<span className="span-victory">{"Victories every day."}</span></p>
      <p>
        <Button onClick={()=>{changeRoute('start')}} className="mt-5 btnn br-5 grow f1 b start-font3" variant="success">
          {"Start a petition"}
        </Button>
      </p>
    </Jumbotron>
  );
}

export default Start;
