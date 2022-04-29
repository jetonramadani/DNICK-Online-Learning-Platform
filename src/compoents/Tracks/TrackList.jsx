import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TrackList = () => {
    const data = [
        {
            id: 1,
            title: "Intro to Java",
            completed: true,
        },
        {
            id: 2,
            title: "Intro to Java",
            completed: false,
        },
        {
            id: 3,
            title: "Intro to Java",
            completed: true,
        },
        {
            id: 4,
            title: "Intro to Java",
            completed: false,
        }
    ]
    return (
        <div>
            {data.map(topic =>
            (<div key={topic.id}
                className={`p-2 rounded-pill m-2 text-white`}
                style={{
                    background: !topic.completed ? '#0B0C2A' : 'darkgreen'
                }}
            >
                <span className='me-5'>{topic.title}</span>
                <Link to={`/topic/${topic.id}`} className="text-light"><Button variant='primary'>Visit</Button></Link>
            </div>)
            )}
        </div >
    )
}

export default TrackList