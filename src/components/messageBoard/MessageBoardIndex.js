import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen'
import { getMessageBoard } from '../../api/messageboard'
import messages from '../shared/AutoDismissAlert/messages'
import messageboardphoto from '../../images/pexels-pixabay-206447.jpg'
import dateFormat, { masks } from "dateformat";
import apiUrl from '../../apiConfig';
import profPicture from '../../images/profile-default.png'
import blogImage from '../../images/fallphoto.jpg'
import CreateMessage from '../messageBoard/CreateMessage'
import { Button } from 'react-bootstrap'

const MessageBoardIndex = (props) => {
    const [messageboard, setMessageBoard] = useState(null)
    const [error, setError] = useState(false)
    const [editModalShow, setEditModalShow] = useState(false)

    const { msgAlert, user } = props
    useEffect(() => {
        getMessageBoard()
            .then(res => setMessageBoard(res.data.messageboard))
            .catch(err => {
                msgAlert({
                    heading: 'Error Getting Messages',
                    message: messages.getMessageFailure,
                    variant: 'danger',
                })
                setError(true)
            })
    }, [])
    if (error) {
        return <p>Error!</p>
    }
    if (!messageboard) {
        return <LoadingScreen />
    } else if (messageboard.length === 0) {
        return  <>  
                    <Card className='text-center m-4 w-2'>
                        <p className='m-0'><em>No Blog Posts Yet</em></p>
                        <p className='m-0'>Say Hello!</p>
                    </Card>
                </>
    }


    const docRoot = document.getElementById('root')
    docRoot.style.backgroundImage = "url(" + messageboardphoto + ")";
    docRoot.style.backgroundSize = "cover";
    const messageboardCards = messageboard.map(messagepost =>

{        const profilePictureSrc =
        messagepost.owner.profilePicture === 'default'
        ? profPicture
        : `${apiUrl}/${messagepost.owner.profilePicture}`; 

        const messagePictureSrc =
          messagepost.image == undefined
            ? blogImage
            : `${apiUrl}/${messagepost.image}`;

        return (
        
            <Card.Body key={messagepost._id} className='m-4 playFont text-center d-inline-block border border-3' style={{width: '100%', maxWidth: '300px'}}>
                <Link to={`/messageboard/${messagepost._id}`} style={{textDecoration: 'none', color: 'black'}}>
                        {/* Picture */}
                    <Card.Text style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecorationLine: 'none' }}>
                        {/* First Span */}
                        <span style={{ display: 'flex', alignItems: 'center', padding: '5px', fontFamily: 'arial'}}>
                            <img 
                            style={{ width: "38px", height: "38px", borderRadius: '100%' }}
                            src={profilePictureSrc}
                            alt="Profile"
                            />
                            <div style={{ marginLeft: '10px' }}>
                            <div>
                                <small style={{fontSize : '12px', textDecoration: 'none'}} className='d-flex'>
                                    <span className='p-1'>
                                        <b> {messagepost.owner.firstName === 'First' ? messagepost.owner.email + " " : messagepost.owner.firstName + " " + messagepost.owner.lastName } </b> 
                                    </span>
                                    <span className='p-1'>
                                    • {dateFormat(messagepost.date, " mmmm d")}
                                    </span>
                                </small>
                            </div>
                            </div>
                        </span>
                    </Card.Text>
                    <div>
                    <div>
                        <h1>{messagepost.title}</h1>
                        <img 
                            style={{width: "250px", height: "215px", borderRadius: '15px', marginTop: "5px"}}
                            src={messagePictureSrc} />
                    </div>
                    <br></br>
                    <hr></hr>
                    <small className='m-1' >
                        {messagepost.comments.length}<em> comments</em></small>
                    </div>
                    </Link>
                </Card.Body>
            )
    })
    
    return (
        <>
            <Card.Title className= 'bg-dark p-3 playFont text-center mb-0' style={{fontSize: '2.5em'}}>
                <img className='rounded-pill' width="200" height="150" src="https://westmountchurch.org/wp-content/uploads/choir-cartoon-300x203.jpg"  alt="a singing choir" decoding="async"></img>
               <Card.Header style={{color: 'white'}}> Choir Blog</Card.Header> 
            </Card.Title>
            <Container className='playFont p-3' style={{ backgroundColor: "rgba(255, 255, 255, 0.97)", width: '100%', maxWidth: 'none'}}>
            <Button onClick={() => setEditModalShow(true)} 
                    className="m-auto border border-2 border-radius-5 border-dark" 
                    variant="info">
                    Create Blog
                </Button>
            </Container>
            <Container className='text-center playFont p-0' style={{ backgroundColor: "rgba(255, 255, 255, 0.97)", width: '100%', maxWidth: 'none'}}>
                {messageboardCards}
            <br></br>
            </Container>

            <CreateMessage
                msgAlert={msgAlert} 
                user={user}
                show={editModalShow}
                handleClose={() => setEditModalShow(false)}
                >     
                </CreateMessage>
        </>
    )
}

export default MessageBoardIndex