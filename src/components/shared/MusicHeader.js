import React from "react"
import { Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const MusicHeader = (props) => {

    const linkStyle = {
        display: 'flex',
        color: 'teal',
        textDecoration: 'none',
        fontSize: '1.5em',
        marginRight: 30,
        minWidth: "100px",
    }

    return (
        <Navbar className='bg-light d-flex flex-wrap justify-content-center'>
        <Nav.Item className=' playFont m-auto'>
            <Link to='/choralresponses' style={linkStyle}>
            <span className=''>Choral Responses</span>
            </Link>
        </Nav.Item>
        <Nav.Item className=' playFont m-auto'>
            <Link to='/singingthelivingtradition' style={linkStyle}>
            <span className=''>Singing The Living Tradition</span>
            </Link>
        </Nav.Item>
        <Nav.Item className=' playFont m-auto'>
            <Link to='/singingthejourney' style={linkStyle}>
            <span className=''>Singing The Journey</span>
            </Link>
        </Nav.Item>
    </Navbar>
    )
}

export default MusicHeader