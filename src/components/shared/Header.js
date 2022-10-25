import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavDropdown } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import ChaliceLogo from '../../images/ChaliceLogo'
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
const welcomeStyle = {
    color: 'white',
	fontSize: '0.8em',
    textDecoration: 'none'
}

const authenticatedOptions = (
	<>

		<Nav.Item className='m-2 playFont'>
			<Link to='/' style={linkStyle}>
				<span className='HoverClass1'>Home</span>
			</Link>
		</Nav.Item>

		<Nav.Item className='m-2 playFont'>
			<Link to='messageboard' style={linkStyle}>
				<span className='HoverClass1'>Messageboard</span>
			</Link>
		</Nav.Item>

		<NavDropdown   
			title={
				<span className="navTitle playFont HoverClass1">Music</span>
				} 	
				menuVariant="dark" 
				style={linkStyle}
		>
			{/* <Nav.Item className='m-2 playFont'>
				<Link to='mysongs' style={linkStyle}>
				<span className='HoverClass1'>My Song List</span>
				</Link>
			</Nav.Item> */}
			<Nav.Item className='m-2 playFont'>
				<Link to='songs' style={linkStyle}>
				<span className='HoverClass1'>Hymns</span>
				</Link>
			</Nav.Item>
		</NavDropdown>

		
		<NavDropdown   
			title={<span className="navTitle playFont HoverClass1">My Account</span>} 
			menuVariant="dark" 
			style={linkStyle}
			>
			<Nav.Item eventKey='1' className='m-2 playFont'>
				<Link to='change-password' style={linkStyle}>
				<span className='HoverClass1'>Change Password</span>
				</Link>
			</Nav.Item >
			<Nav.Item eventKey='2' className='m-2 playFont'>
				<Link to='sign-out' style={linkStyle}>
				<span className='HoverClass1'>Sign Out</span>
				</Link>
			</Nav.Item>
		</NavDropdown>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item className='m-2'>
		    <Link to='sign-in' style={linkStyle}>
				<span className='HoverClass1 playFont'>Login</span>
			</Link>
        </Nav.Item>
        <Nav.Item className='m-2'>
		    <Link to='sign-up' style={linkStyle}>
				<span className='HoverClass1 playFont'>Create Account</span>
			</Link>
        </Nav.Item>
	</>
)

const adminOptions = (
	<>
		<NavDropdown
				title={
					<span className="navTitle playFont HoverClass1">Admin</span>
					} 	
					menuVariant="dark" 
					style={linkStyle}
		>
			<Nav.Item className='m-2 playFont'>
				<Link to='user-contacts' style={linkStyle}>
					<span className='HoverClass1'>Users</span>
				</Link>
			</Nav.Item>
			<Nav.Item className='m-2 playFont'>
				<Link to='create-song' style={linkStyle}>
					<span className='HoverClass1'>Add a Song</span>
				</Link>
			</Nav.Item>
		</NavDropdown>
	</>
)

// const alwaysOptions = (
// 	<>
// 		<Nav.Item className='m-2 playFont'>
// 			<Link to='/' style={linkStyle}>
// 				<span className='HoverClass1'>Home</span>
// 			</Link>
// 		</Nav.Item>
// 	</>
// )

const Header = ({ user }) => (
	<Navbar bg='dark' variant='dark' expand='md'>
		<Navbar.Brand className='m-2 playFont'>
            <Link to='/' style={linkStyle}>
			<span><ChaliceLogo className='repsonsive-image'></ChaliceLogo></span><span className='HoverClass1'> All Souls </span>
            </Link>
			{user && (
				<>
					{/* <br></br> */}
						<div className='navbar-text playFont pt-0 m-auto' style={welcomeStyle}>Welcome, {user.email}</div>
				</>
				)}
        </Navbar.Brand>

		<Navbar.Toggle aria-controls='basic-navbar-nav' />

		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='m-auto'>
				{/* {alwaysOptions} */}
				{user && user.email === ('r@r.r' || 'a@a.a' || 'clapperpianist@gmail.com') ? adminOptions : null}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
