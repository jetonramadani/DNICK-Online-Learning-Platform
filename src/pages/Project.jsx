import React, { useState } from 'react'
import { Col, Nav, Row } from 'react-bootstrap'
import DefaultLayout from '../compoents/default_layout/DefaultLayout'
import PorjectCarousal from '../compoents/Projects/PorjectCarousal'
import TrackList from '../compoents/Tracks/TrackList'

const Project = () => {
    const [active, setActive] = useState("EN");
    return (
        <DefaultLayout>
            <Row>
                <Col xs={12} lg={7}>
                    <Nav variant="pills" justify className="mt-2">
                        <Nav.Item>
                            <Nav.Link className={active === "EN" ? 'active' : ''} onClick={() => setActive(`EN`)}>EN</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={active === "MK" ? 'active' : ''} onClick={() => setActive('MK')}>MK</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={active === "SQ" ? 'active' : ''} onClick={() => setActive('SQ')}>SQ</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <h1>Interactive rating component</h1>
                    <PorjectCarousal />
                    <p className='text-justify'>
                        Your challenge is to build out this interactive rating component and get it looking as close to the design as possible.

                        You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

                        Your users should be able to:

                        <ul>
                            <li>Select and submit a number rating</li>
                            <li>See the "Thank you" card state after submitting a rating</li>
                            <li>View the optimal layout for the app depending on their device's screen size</li>
                            <li>See hover states for all interactive elements on the page</li>

                        </ul>
                    </p>
                </Col>
                <Col xs={12} lg={5}>
                    <div className='text-start'>Good to know: </div>
                    <TrackList />
                </Col>
            </Row>
        </DefaultLayout>
    )
}

export default Project