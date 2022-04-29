import React from 'react'
import { Col, Row } from 'react-bootstrap'
import DefaultLayout from '../compoents/default_layout/DefaultLayout'
import TrackCard from '../compoents/Tracks/TrackCard'

const Tracks = () => {
    const tracks = [
        {
            title: "Java",
            numOfTopics: 12,
            completed: 8,
            description: "If you don't have much experience in programming, this track is the best way to start your journey to the Java world by learning the basics. Here, you'll cover topics relevant to the AP Computer Science course on Java programming."
        },
        {
            title: "Python",
            numOfTopics: 20,
            completed: 19,
            description: "This track will guide you on your path of mastering Python, one of the much-in-demand languages in today's environment. Known for its straightforward syntax, Python is easy to learn and use, which accounts for its popularity and makes its community grow every day. "
        },
        {
            title: "Frontend ",
            numOfTopics: 8,
            completed: 4,
            description: "Do you want to create your interactive websites or web applications? Choose this track to learn the most popular language among programmers around the world. In this topic you will learn JavaScript."
        }]
    return (
        <DefaultLayout>
            <Row>
                {tracks.map(track =>
                    <Col lg={6} xs={12}>
                        <TrackCard
                            title={track.title}
                            topics={track.numOfTopics}
                            completed={track.completed}
                            description={track.description}
                        />
                    </Col>
                )}
            </Row>
        </DefaultLayout>
    )
}

export default Tracks