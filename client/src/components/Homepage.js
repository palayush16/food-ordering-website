import React from 'react'
import { Link } from "react-router-dom";
import { Button,Card,Carousel}  from 'react-bootstrap/';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import './Homepage.css';

const Homepage = () => {
    
    return (
        <div>
            <Carousel controls={false} fade={true} pause={false}>
            <Carousel.Item className="carouselItem" interval={5000}>
                <img
                className="d-block w-100"
                src={img1}
                height={790}
                alt="First slide"
                />
                <Carousel.Caption>
                    
                </Carousel.Caption>
                
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                className="d-block w-100"
                src={img2}
                height={790}
                alt="Second slide"
                />

                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                className="d-block w-100"
                src={img3}
                height={790}
                alt="Third slide"
                />

                <Carousel.Caption>
                  
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            <Card>
                        <Card.Header>Order Now</Card.Header>
                        <Card.Body>
                            <Card.Title>To book your meal login or Sign up </Card.Title>
                            {/* <Card.Text>
                            
                            </Card.Text> */}
                            <Link to="/auth"><button>Login</button></Link>
                        </Card.Body>
                    </Card>
        </div>
    )
}

export default Homepage
