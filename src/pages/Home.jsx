import React, { useState } from 'react'
import DefaultLayout from '../compoents/default_layout/DefaultLayout'
import home from "../assets/home.jpeg";
import { Button, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Home = () => {
    const [logedIn, setLogedIn] = useState(false);
    const val = localStorage.getItem("logged_in");
    if (val && val !== logedIn.toString()) {
        setLogedIn(val === "true");
    }
    return (
        <DefaultLayout>
            <Row>
                <Col xs={12} lg={8}>
                    <Image src={home} className="img-thumbnail" />
                </Col>
                <Col xs={12} lg={4} className="d-flex flex-column justify-content-center gap-4 ">
                    {logedIn ?
                        <>
                            <Link to="/tracks"><Button className='w-100'>Visit tracks</Button> </Link>
                            <Link to="/projects"><Button className='w-100'>Visit projects</Button> </Link>
                        </>
                        : <Link to="/start"><Button className='w-100'>Get Started</Button> </Link>}

                </Col>
            </Row>
        </DefaultLayout>
    )
}

export default Home