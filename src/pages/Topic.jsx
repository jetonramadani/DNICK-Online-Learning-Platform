import React from 'react'
import { Col, Row } from 'react-bootstrap'
import DefaultLayout from '../compoents/default_layout/DefaultLayout'
import TopicView from '../compoents/Tracks/TopicView'
import TrackList from '../compoents/Tracks/TrackList'

const Topic = () => {
    return (
        <DefaultLayout>
            <Row className='mt-2'>
                <Col xs={12} lg={7}>
                    <TopicView />
                </Col>
                <Col xs={12} lg={5}>
                    <div className='text-start'>Related Topics: </div>
                    <TrackList />
                </Col>
            </Row>
        </DefaultLayout>
    )
}

export default Topic