import React from 'react'
import { Col, Row } from 'react-bootstrap'
import DefaultLayout from '../compoents/default_layout/DefaultLayout'
import ProjectCard from '../compoents/Projects/ProjectCard'

const Projects = () => {
    const tracks = [
        {
            title: "Java",
            description: "This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!"
        },
        {
            title: "Python",
            description: "This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!"
        },
        {
            title: "Frontend",
            description: "This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!"
        }]
    return (
        <DefaultLayout>
            <Row>
                {tracks.map(track =>
                    <Col lg={6} xs={12}>
                        <ProjectCard
                            title={track.title}
                            description={track.description}
                        />
                    </Col>
                )}
            </Row>
        </DefaultLayout>
    )
}

export default Projects