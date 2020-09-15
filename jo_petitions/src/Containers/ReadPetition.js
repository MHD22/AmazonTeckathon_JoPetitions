import React from 'react';
import { Container ,Col} from 'react-bootstrap';

function ReadPetition({data , changeRoute}){

    return(
    <Container>
        <div className="relative  row br4 ba mt5 bg-black-10 shadow-5">
            <Col xs={12}>
            <div className="tr mr3 mt3 ">
            <i onClick={()=>{changeRoute(data.oldRoute)}} class="fas fa-times f2 link pointer grow"></i>
            </div>
            </Col>
            <Col xs={12}>
            <h1 className="f1 b">{data.title}</h1>
            <hr className="bw3"/>
            </Col>
            <Col xs={12}>
            <img className="br4 shadow-4 mb5 mt2 " src={data.photo} alt="petition pic" width={400} height={400} />
            </Col>
            <Col xs={12}>
    <p className="f2  w-100  overflow-x-hidden "> {data.text}</p>
<hr className="bw3"/>
            </Col>
            <Col xs={6}>
            <p className="tl  f3 b i ml4">{data.name}</p>
            <p className="b tl ml4">{data.date}</p>
            </Col>
            <Col xs={6}>
            <p className="tr f2 pr4 pt2">
            {data.supports}
            <i className="far ml3 fa-thumbs-up link pointer grow f1"></i>
            {/* <i className="fas fa-thumbs-up  f1"></i> */}

            </p>
            </Col>
        </div>
    </Container>
        );
}


export default ReadPetition;