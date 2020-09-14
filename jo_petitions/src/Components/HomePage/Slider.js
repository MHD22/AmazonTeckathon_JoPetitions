import React,{ useState } from 'react';
import {Carousel,Container,Row,Col} from 'react-bootstrap'
import im1 from './img1.jpg';
import im2 from './img2.jpg';
import im3 from './img3.jpg';

function Slider(){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

return(
 <Container className="mt5">
    <Carousel activeIndex={index} onSelect={handleSelect} className="bg-black-10">
      <Carousel.Item >
          <Row>
              <Col xs={7}>
        <img
          className="d-block w-100 shadow-5"
          src={im1}
          alt="First slide"
          height={"400"}
        />
            </Col>
            <Col>
        <Carousel.Caption className="text-dark b mb6">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
            </Col>
            </Row>
      </Carousel.Item>

      <Carousel.Item>
      <Row>
              <Col xs={7} >
        <img
          className="d-block w-100 shadow-5"
          src={im2}
          alt="Second slide"
          height={"400"}
        />
            </Col>
            <Col>

        <Carousel.Caption className="text-dark b mb6">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
          <Row>
              <Col xs={7}>
        <img
          className="d-block w-100 shadow-5 "
          src={im3}
          alt="Third slide"
          height={"400"}
        />
              
              </Col >
            <Col>
        <Carousel.Caption className="text-dark b mb6">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>

            </Col>

          </Row>

      </Carousel.Item>
    </Carousel>
 </Container>

);

};

export default Slider;