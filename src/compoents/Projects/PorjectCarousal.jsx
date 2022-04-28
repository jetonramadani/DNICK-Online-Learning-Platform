import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import desktop from "../../assets/desktop.jpg";
import active from "../../assets/active.jpg";
import thanks from "../../assets/thanks.jpg";
import mobile from "../../assets/mobile.jpg";
const PorjectCarousal = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <Image
                    className="d-block w-100 img-thumbnail"
                    src={desktop}
                    alt="First slide"
                />
                <Carousel.Caption className='text-dark bg-light'>
                    <h3>Desktop view</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100 img-thumbnail"
                    src={active}
                    alt="Second slide"
                />

                <Carousel.Caption className='text-dark bg-light'>
                    <h3>Acitve Selection view</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100 img-thumbnail"
                    src={thanks}
                    alt="Thanks view"
                />

                <Carousel.Caption className='text-dark bg-light'>
                    <h3>Thanks view</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100 img-thumbnail"
                    src={mobile}
                    alt="Mobile view"
                />

                <Carousel.Caption className='text-dark bg-light'>
                    <h3>Mobile view</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default PorjectCarousal