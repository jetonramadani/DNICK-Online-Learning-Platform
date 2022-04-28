import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from './Footer'
import Header from './Header'

const DefaultLayout = (props) => {
    return (
        <div className='d-flex min-vh-100 flex-column justify-content-between'>
            <Header />
            <Container>
                <main>
                    {props.children}
                </main>
            </Container>
            <Footer />
        </div>
    )
}

export default DefaultLayout