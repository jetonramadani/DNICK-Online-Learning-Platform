import React from 'react'
import { Card, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {
    return (
        <Card className='w-100 m-2'>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 d-flex gap-4">
                    <div className="rounded-pill" style={{ color: "turqoise" }}>HTML</div>
                    <div className="rounded-pill" style={{ color: "purple" }}>CSS</div>
                    <div className="rounded-pill" style={{ color: "pink" }}>JS</div>
                </Card.Subtitle>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Link className="nav-link" to={`/project`} >Open project</Link>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;