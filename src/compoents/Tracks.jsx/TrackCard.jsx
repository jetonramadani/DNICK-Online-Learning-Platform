import React from 'react'
import { Card, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TrackCard = (props) => {
    const progres = Math.floor((props.completed / props.topics) * 100.)
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
                <Link className="nav-link" to={`/track/${props.title}`} >Open track</Link>
            </Card.Body>
        </Card>
    )
}

export default TrackCard