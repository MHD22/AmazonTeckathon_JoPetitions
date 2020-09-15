import React from 'react';
import {Row, Col} from 'react-bootstrap';
function Page1({changeRoute}){
    const icons=[[<i class="fas fa-map-marker-alt f1"></i>,"Local"],
    [<i class="fas f1 fa-heartbeat"></i>,"Health"],
    [<i class="fas f1 fa-users"></i>,"Human rights"],
    [<i class="fas f1 fa-money-check-alt"></i>,"Economic"],
    [<i class="fas f1 fa-vote-yea"></i>,"Politics"],
    [<i class="fas f1  fa-paw"></i>,"Animals"],
    [<i class="fas f1 fa-female"></i>,"Women's rights"],
    [<i class="fab f1 fa-envira"></i>,"Environment"],
    [<i class="fas f1 fa-user-friends"></i>,"Family"],
    [<i class="fas f1 fa-balance-scale-right"></i>,"Crinimal justice"],
    [<i class="fas f1 fa-graduation-cap"></i>,"Education"],
    [<i class="fas f1 fa-question"></i>,"Other"],
    
     ];
     const typeTags= icons.map((item,index)=>{
         return(
            <Col key={index}>
            <div className="tc link pointer grow"
                onClick={()=>{changeRoute("page2")}}>
            <div className="icon-container">
                <br/><br/>
            {item[0]}
            </div>
            <p>{item[1]}</p>
            </div>
            </Col>
         );
     });
     const row1=typeTags.filter((tag,index)=> index<4)
     const row2=typeTags.filter((tag,index)=> index>3 && index<8)
     const row3=typeTags.filter((tag,index)=> index>7)
return(
        <>

       <div className="tc mt5 startPetition mb5">
           <h1>What kind of issue are you petitioning on?</h1>
           <p>selecting a topic allows JO Petitions to recommend your petition to interested supporters.</p>
       </div>
       <Row>
        {row1}
       </Row>


       {/* second row  */}

       <Row>
           {row2}
       </Row>

       {/* third row */}
       <Row className="mb5">
        {row3}
       </Row>
       
       </>
   
);

};

export default Page1;

/* <div className="tr">
       <Button variant="warning button-warn grow" >Continue</Button>
       </div> */