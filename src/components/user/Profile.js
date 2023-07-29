import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'
import dateFormat, { masks } from "dateformat";
import EditProfileModal from './EditUserModal';
import apiUrl from '../../apiConfig';
import profPicture from '../../images/profile-default.png'

const Profile = (props) => {
    
	const { user, setUser, newProfile, msgAlert, triggerRefresh } = props
    const [editModalShow, setEditModalShow] = useState(false)
    const [updated, setUpdated] = useState(false)

    if (!user) {
        // If the user object is not available, display a loading state or a message.
        return <div>Loading...</div>;}

    const profilePictureSrc =
        user.profilePicture === '/path/to/default/profile-image.png'
        ? profPicture
        : `${apiUrl}/${user.profilePicture}`;    
    
    return (
        <>
            <Card>
                <h2 className='mt-4 text-center'>Profile</h2>
                <img className='text-center d-flex m-auto' style={{width: '150px', height: '150px',}} src={profilePictureSrc}></img>
                <Container className='mt-3 p-0 rounded' style={{width: '100%', boxShadow: '3px 3px 3px grey', border: '3px solid black'}}>
                    <Row className='m-auto p-3 rounded-top' style={{border: '2px solid black'}}>
                        <Col md={6} className="text-start" style={{fontSize: '1.5em'}}>Name</Col>
                        <Col md={6}  style={{fontSize: '1.4em'}}>{user.firstName} {user.lastName}</Col>
                    </Row>
                    <Row className='m-auto p-3 rounded-top' style={{border: '2px solid black'}}>
                        <Col md={6} className="text-start" style={{fontSize: '1.5em'}}>Email</Col>
                        <Col md={6} style={{fontSize: '1.4em'}}>{user.email}</Col>
                    </Row>
                    <Row className='m-auto p-3 rounded-top' style={{border: '2px solid black'}}>
                        <Col md={6} className="text-start" style={{fontSize: '1.5em'}}>Phone</Col>
                        <Col md={6} style={{fontSize: '1.4em'}}>{user.phoneNumber}</Col>
                    </Row>
                    <Row className='m-auto p-3 rounded-top' style={{border: '2px solid black'}}>
                        <Col md={6} className="text-start" style={{fontSize: '1.5em'}}>Vocal Range</Col>
                        <Col md={6} style={{fontSize: '1.4em'}}>{user.vocalRange}</Col>
                    </Row>
                    <Row className='m-auto p-3 rounded-top' style={{border: '2px solid black'}}>
                        <Col md={6} className="text-start" style={{fontSize: '1.5em'}}>Prefered Contact</Col>
                        <Col md={6} style={{fontSize: '1.4em'}}>{user.preferredContact}</Col>
                    </Row>
                    <Row className='m-auto p-3 rounded-top' style={{border: '2px solid black'}}>
                        <Col md={6} className="text-start" style={{fontSize: '1.5em'}}>Prefered Pronouns</Col>
                        <Col md={6} style={{fontSize: '1.4em'}}>{user.pronouns}</Col>
                    </Row>
                </Container>
                <h3 className='mt-4 text-center'>Settings</h3>

                <Container className='mt-3 p-0 rounded' style={{width: '100%', boxShadow: '3px 3px 3px grey', border: '3px solid black'}}>
                    <Row className='m-auto p-3 rounded-top' style={{border: '2px solid black'}}>
                        <Col md={6} className="text-start" style={{fontSize: '1.5em'}}>Email Notifications</Col>
                        <Col md={6}  style={{fontSize: '1.4em'}}>{  user.settings.receiveBlogNotifications  ? "yes " : "no"} </Col>
                    </Row>
                    <Row className='m-auto p-3 rounded-top' style={{border: '2px solid black'}}>
                        <Col md={6} className="text-start" style={{fontSize: '1.5em'}}>Blog Notifications</Col>
                        <Col md={6} style={{fontSize: '1.4em'}}>{user.settings.receiveServiceNotifications ? "yes " : "no"}</Col>
                    </Row>
       
        
         
                </Container>
                <Container className='p-4 w-100 border text-center'>
                    {
                        user._id 
                        ?
                                <Button onClick={() => setEditModalShow(true)} className="w-25 m-auto border border-5 border-radius-5 border-dark" variant="warning">
                                Edit Profile
                                </Button>
                        :
                            <p>Null</p>
                    }

                </Container>
            </Card>
            <EditProfileModal 
                user={user}
                setUser={setUser}
                newProfile={newProfile}
                show={editModalShow}
                handleClose={() => setEditModalShow(false)}
                // updateUprofile={updateProfile}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(!updated)}
                // triggerRefresh={triggerRefresh}
                />
        </>
    )
}

export default Profile