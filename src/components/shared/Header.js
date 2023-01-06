import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavDropdown } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import ChaliceLogo from '../../images/ChaliceLogo'
const linkStyle = {
    color: 'white',
    textDecoration: 'none',
	fontSize: '2em',
	marginRight: 30,
}
const dropStyle = {
    color: 'white',
    textDecoration: 'none',
	fontSize: '1.4em',
}

const allowedEmails = ['r@r.r', 'clapperpianist@gmail.com']


const authenticatedOptions = (
	<>

		<Nav.Item className='m-auto playFont'>
			<Link to='/' style={linkStyle}>
				<span className='HoverClass1'>Sunday Services</span>
			</Link>
		</Nav.Item>

		<Nav.Item className='m-auto playFont'>
			<Link to='messageboard' style={linkStyle}>
				<span className='HoverClass1'>Blog</span>
			</Link>
		</Nav.Item>


		<NavDropdown 
			className='m-auto'  
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
			<Nav.Item className=' playFont text-center'>
				<Link to='songs' style={dropStyle}>
				<span className='HoverClass1'>Choral Music</span>
				</Link>
			</Nav.Item>
			<Nav.Item className=' playFont text-center'>
				<Link to='choralresponses' style={dropStyle}>
				<span className='HoverClass1'>Choral Responses</span>
				</Link>
			</Nav.Item>
			<Nav.Item className=' playFont text-center'>
				<Link to='singingthelivingtradition' style={dropStyle}>
				<span className='HoverClass1'>Singing The Living Tradition</span>
				</Link>
			</Nav.Item>
			<Nav.Item className=' playFont text-center'>
				<Link to='singingthejourney' style={dropStyle}>
				<span className='HoverClass1'>Singing The Journey</span>
				</Link>
			</Nav.Item>
		</NavDropdown>

		
		<NavDropdown  
			className='m-auto myAccount' 
			title={<span className="navTitle playFont HoverClass1">My Account</span>} 
			menuVariant="dark" 
			style={linkStyle}
			>
			{/* <Nav.Item eventKey='1' className='text-center playFont'>
				<Link to='profile' style={dropStyle}>
				<span className='HoverClass1'>Profile</span>
				</Link>
			</Nav.Item > */}
			<Nav.Item eventKey='1' className='text-center playFont'>
				<Link to='change-password' style={dropStyle}>
				<span className='HoverClass1'>Change Password</span>
				</Link>
			</Nav.Item >
			<Nav.Item eventKey='2' className='text-center playFont'>
				<Link to='sign-out' style={dropStyle}>
				<span className='HoverClass1'>Sign Out</span>
				</Link>
			</Nav.Item>
		</NavDropdown>

	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item className='m-auto'>
		    <Link to='sign-in' style={linkStyle}>
				<span className='HoverClass1 playFont'>Login</span>
			</Link>
        </Nav.Item>
        <Nav.Item className='m-auto'>
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
			<Nav.Item className='text-center playFont'>
				<Link to='user-contacts' style={dropStyle}>
					<span className='HoverClass1'>Users</span>
				</Link>
			</Nav.Item>
			<Nav.Item className='text-center playFont'>
				<Link to='create-song' style={dropStyle}>
					<span className='HoverClass1'>Add a Song</span>
				</Link>
			</Nav.Item>
		</NavDropdown>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Item className='m-auto playFont'>
			<Link to='/about-us' style={linkStyle}>
				<span className='HoverClass1'>About Us</span>
			</Link>
		</Nav.Item>
	</>
)

const Header = ({ user }) => (
	<>
		<Navbar bg='dark' variant='dark' expand='md'>
			<span>
				{user && (
					<span className='accountStyle playFont text-center' >
						<NavDropdown  
							title={<span className="navTitle playFont HoverClass1">👤 Welcome, {user.email}</span>} 
							menuVariant="dark" 
							>
							{/* <Nav.Item eventKey='1' className='text-center playFont'>
								<Link to='profile' style={dropStyle}>
								<span className='HoverClass1'>Profile</span>
								</Link>
							</Nav.Item > */}
							<Nav.Item eventKey='1' className='text-center playFont'>
								<Link to='change-password' style={dropStyle}>
								<span className='HoverClass1'>Change Password</span>
								</Link>
							</Nav.Item >
							<Nav.Item eventKey='2' className='text-center playFont'>
								<Link to='sign-out' style={dropStyle}>
								<span className='HoverClass1'>Sign Out</span>
								</Link>
							</Nav.Item>
						</NavDropdown>
					</span>
					)}
			</span>
			<Navbar.Brand className='m-auto playFont'>
				<Link to='/' style={linkStyle}>
				<span><ChaliceLogo className='repsonsive-image'></ChaliceLogo></span><span className='HoverClass1'> All Souls Choir</span>
				</Link>
			</Navbar.Brand>
		</Navbar>
		<Navbar bg='dark' variant='dark' expand='md'>
			<Navbar.Toggle className='ms-4' aria-controls='basic-navbar-nav'/>
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='m-auto'>
					{alwaysOptions}
					{user ? authenticatedOptions : unauthenticatedOptions}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		<Navbar bg='dark' variant='dark' expand='sm'>
			<Nav className='m-auto'>
				{user && allowedEmails.includes(user.email) ? adminOptions : null}
			</Nav>
		</Navbar>
	</>
)

export default Header
