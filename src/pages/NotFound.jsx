import React from 'react'
import { Link } from 'react-router-dom'
import DefaultLayout from '../compoents/default_layout/DefaultLayout'

const NotFound = () => {
  return (
    <DefaultLayout className="align-items-center">
      <div>404 The Page you are looking for doesn't exists</div>
      <Link to="/">Go back home</Link>
    </DefaultLayout>
  )
}

export default NotFound;