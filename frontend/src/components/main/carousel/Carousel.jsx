import React from 'react';
import first from '../../../assets/images/first_slide.jpg';
import second from '../../../assets/images/second_slide.jpg';
import third from '../../../assets/images/third_slide.jpg';
import {Button, Carousel} from "react-bootstrap";
import style from "./carosel.module.css";

export const Slide = () => {

    return (
        <div className={`${style.carousel}`}>
            <Carousel
                fade
                controls={true}
                indicators={true}
                interval={4000}
                pause={false}
            >
                <Carousel.Item>
                    <div className={`${style.carousel_img_wrap}`}>
                        <img
                            className={`${style.carousel_img} w-100`}
                            src={first}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption className={`${style.carousel_caption}`}>
                        <h1>First slide label</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <Button>Learn more</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={`${style.carousel_img_wrap}`}>
                        <img
                            className={`${style.carousel_img} w-100`}
                            src={second}
                            alt="Second slide"
                        />
                    </div>

                    <Carousel.Caption className={`${style.carousel_caption}`}>
                        <h1>Second slide label</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button>Learn more</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={`${style.carousel_img_wrap}`}>
                        <img
                            className={`${style.carousel_img} w-100`}
                            src={third}
                            alt="Third slide"
                        />
                    </div>

                    <Carousel.Caption className={`${style.carousel_caption}`}>
                        <h1>Third slide label</h1>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <Button>Learn more</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}


