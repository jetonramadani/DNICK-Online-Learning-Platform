import React from 'react'
import { useParams } from 'react-router-dom';
import DefaultLayout from '../compoents/default_layout/DefaultLayout'
import TrackList from '../compoents/Tracks.jsx/TrackList'

const Track = () => {
    const { title } = useParams();
    return (
        <DefaultLayout>
            <div className='text-start'>Welcome to track: {title}</div>
            <TrackList />
        </DefaultLayout>
    )
}

export default Track