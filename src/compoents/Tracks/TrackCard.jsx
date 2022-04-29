import React from 'react'
import { Button, Card, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TrackCard = (props) => {
    const progres = Math.floor((props.completed / props.topics) * 100.);

    return (
        <Card className='w-100 m-2'>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.topics} topics</Card.Subtitle>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Card.Text>
                    <div>Progress: {props.completed}/{props.topics}</div>
                    <ProgressBar now={progres} label={`${progres}%`} />
                </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex gap-4'>
                <Link className="nav-link btn btn-primary text-white w-50" to={`/track/${props.title}`} >Open track</Link>
                <Link to="/files/certificate.pdf"
                    className={`nav-link btn btn-primary text-white w-50 ${progres < 95 ? 'pe-none bg-dark' : 'pe-auto'}`}
                    target="_blank" download>Download</Link>
            </Card.Footer>
        </Card>
    )
}

export default TrackCard