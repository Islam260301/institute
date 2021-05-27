import React from 'react';
import first from '../../../assets/images/first_slide.jpg';
import second from '../../../assets/images/second_slide.jpg';
import third from '../../../assets/images/third_slide.jpg';
import {Button, Carousel} from "react-bootstrap";


export const Slide = () => {

    return (
        <Carousel
            fade
            controls={true}
            indicators={true}
            interval={4000}
            pause={false}
        >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={first}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <Button>Learn more</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={second}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button>Learn more</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={third}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <Button>Learn more</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}


