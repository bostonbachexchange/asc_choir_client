import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import LoadingScreen from '../shared/LoadingScreen'
import { getOneMessage, updateMessage, removeMessage } from '../../api/messageboard'
import { removeComment, updateComment } from '../../api/comments'
import messages from '../shared/AutoDismissAlert/messages'
import { Button, Card, Container } from 'react-bootstrap'
import EditMessageModal from './EditMessageModal'
import NewCommentModal from '../comments/NewCommentModal'
import EditCommentModal from '../comments/EditCommentModal'
import dateFormat from 'dateformat'
import apiUrl from '../../apiConfig'
import profPicture from '../../images/profile-default.png'

const ShowMessage = (props) => {
    const [message, setMessage] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    const [commentModalShow, setCommentModalShow] = useState(false)
    const [editCommentModalShow, setEditCommentModalShow] = useState(false)
    const [updated, setUpdated] = useState(false)
    const [commentID, setCommentID] = useState(null)

    const { id } = useParams()
    const { msgAlert, user, comment, triggerRefresh, heading } = props
    const navigate = useNavigate()

    useEffect(() => {
        getOneMessage(id)
            .then(res => setMessage(res.data.message))
            .catch(err => {
                msgAlert({
                    heading: 'Error getting Message',
                    message: messages.getMessageFailure,
                    variant: 'danger'
                })
                navigate('/')
            })
    }, [updated])

    if (!message) {
        return <LoadingScreen />
    }

    const removeTheMessage = () => {
        removeMessage(user, message._id)
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.removeMessageSuccess,
                    variant: 'success'
                })
            })
            .then(() => {navigate(`/messageboard`)})
            .catch(err => {
                msgAlert({
                    heading: 'Error removing message',
                    message: messages.removeMessageFailure,
                    variant: 'danger'
                })
            })
    }

    const removeTheComment = (cmt) => {
        removeComment(user, message._id, cmt._id)
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.removeCommentSuccess,
                    variant: 'success'
                })
            })
            .then(() => setUpdated(!updated))
            .catch(err => {
                msgAlert({
                    heading: 'Error removing message',
                    message: messages.removeCommentFailure,
                    variant: 'danger'
                })
            })
    }



// Comments Lists
    const commentList = message.comments.map(cmt => {
        /* CSS File (add this to your CSS file or inline in the head section) */
/* Add hover styles for buttons */

  
        const commentPictureSrc =
          cmt.owner.profilePicture === 'default'
            ? profPicture
            : `${apiUrl}/${cmt.owner.profilePicture}`;
        
        return (
          <Card key={cmt._id} className='m-2 p-0 commentSize'>
            <Card.Body className='p-0'>
                {/* Picture */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* First Span */}
                    <span style={{ display: 'flex', alignItems: 'center', padding: '5px', fontFamily: 'arial' }}>
                        <img 
                        style={{ width: "38px", height: "38px", borderRadius: '100%' }}
                        src={commentPictureSrc}
                        alt="Profile"
                        />
                        <div style={{ marginLeft: '10px' }}>
                        <div>
                            <small>
                            <b>{cmt.owner.firstName === 'First' ? cmt.owner.email : cmt.owner.firstName + " " + cmt.owner.lastName }</b>
                            </small>
                        </div>
                        <div>
                            <small className='' style={{color: '#8a8d91', fontSize: '12px'}}>
                                {dateFormat(message.date, "mmmm d")}
                            </small>
                        </div>
                        </div>
                    </span>

                {/* Second Span */}
                {cmt.owner && user && cmt.owner._id === user._id ? (
                    <span className='p-0 m-0'>
                    <Button
                        commentId={cmt._id}
                        onClick={() => (setCommentID(cmt._id), setEditCommentModalShow(true))} 
                        className="mt-0 pr-2 HoverClassEdit" 
                        style={{background: 'transparent', border: 'none', color: 'blue' }}
                    >
                        Edit
                    </Button>                
                    <Button
                        onClick={() => removeTheComment(cmt)} 
                        className="mt-0 pr-3 HoverClassDelete" 
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'red',
                            ':hover': {
                              color: 'yellow',
                            }
                          }}
                    >
                        Delete
                    </Button>                     
                    </span>
                ) : null}
                </div>

                {/* Content */}
                <hr></hr>
                <div className='p-2 m-2' style={{fontSize: '18px'}}>{cmt.content}</div>
            </Card.Body>
          </Card>
        );
      });
      

    const profilePictureSrc =
        message.owner.profilePicture === 'default'
        ? profPicture
        : `${apiUrl}/${message.owner.profilePicture}`;

    return (
        <>
            <Container className='fluid playFont' >
                <Card>
                    <Card.Body>
                        <Card.Text >
                            <div style={{ display: 'flex', justifyContent: "space-between", padding: '5px', fontFamily: 'arial'}}>
                                {/* Picture */}
                                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                                    <img 
                                        style={{ width: "40px", height: "40px", borderRadius: '100%' }}
                                        src={profilePictureSrc}
                                        alt="Profile"
                                    />
                                    {/* Name */}
                                    <div style={{ marginLeft: '10px' }}>
                                        <small > 
                                            <b>{message.owner.firstName === 'First' ? message.owner.email : message.owner.firstName + " " + message.owner.lastName  }
                                            </b>
                                        </small>
                                        <div style={{ fontSize: '10px' }}>{dateFormat(message.date, "mmmm d, yyyy")}</div>
                                    </div>
                                </div>
                                {
                                message.owner && user && message.owner._id === user._id 
                                ?
                                    <div className=''>
                                        <Button onClick={() => setEditModalShow(true)}  
                                        style={{padding: '2px'}}
                                        variant="warning"
                                        >
                                            <span className="commentButtons">Edit Blog</span>
                                        </Button>
                                        <Button onClick={() => removeTheMessage()} className="commentButtons" 
                                        variant="danger"
                                        style={{padding: '2px'}}
                                        >
                                            <span className="commentButtons"> Delete Blog</span>
                                        </Button>
                                    </div>
                                :
                                null
                                }
                            </div>
                            <Container  className='text-center p-2'>
                                <h1 style={{fontFamily: 'Roboto' }}>
                                    <strong>{ message.title}</strong>
                                </h1>                        
                                <div>
                                    <small className='mt-2'><em className='m-1'>posted </em> {dateFormat(message.date, "dddd, h:MM TT")}</small>
                                </div>
                            </Container>

                            {/* Blog Image */}
                            {message.image ? 
                                <div className='text-center m-1'>
                                    <img 
                                        style={{width: "300px", height: "320px", borderRadius: '15px', marginTop: "5px"}}
                                        src={`${apiUrl}/${message.image}`} />
                                </div>
                            : null
                            }

                            {/* Blog Content */}
                            <div className='m-2 p-4 mt-4' style={{fontSize: '18px', fontFamily: "Roboto"}}>
                                {message.content ?(
                                <div> 
                                    {message.content.split("|").map((line, index) => (
                                        <div 
                                            className={`text-center ${index === 0 ? "first-line" : ""}`} 
                                            style={line === "``" ? {color: "white"} : {}}>
                                            {index === 0 ? <b>
                                                <span style={{color: '#A78B41', fontSize: '2em', verticalAlign: 'middle'}}>{line.substring(0, 1)}</span></b> : ""}
                                            {line.substring(1)}
                                        </div>)
                                    )}
                                </div>) : (null)}
                                </div>
                        </Card.Text>
                    </Card.Body>     
             
                    <Container className='p-3'>
                        <hr></hr>
                        <Button 
                            onClick={()=> setCommentModalShow(true)} 
                            variant='info'>
                                Post a comment
                        </Button>
                    </Container>
                    {commentList.length > 0 ? 
                        <Card.Footer className='p-4'>
                            <div>
                                <small>{commentList}</small>
                            </div>
                        </Card.Footer>
                    : null}
                </Card>
            </Container>

        <EditMessageModal 
            user={user}
            message={message}
            show={editModalShow}
            updateMessage={updateMessage}
            msgAlert={msgAlert}
            triggerRefresh={() => setUpdated(updated => !updated)}
            handleClose={() => setEditModalShow(false)}
        />
        <EditCommentModal 
            user={user}
            message={message}
            comment={comment}
            commentID={commentID}
            show={editCommentModalShow}
            handleClose={() => setEditCommentModalShow(false)}
            msgAlert={msgAlert}
            updated={updated}
            setUpdated={setUpdated}
        />
        <NewCommentModal 
            message={message}
            show={commentModalShow}
            user={user}
            msgAlert={msgAlert}
            triggerRefresh={() => setUpdated(updated => !updated)}
            handleClose={() => setCommentModalShow(false)}
        />
    </>
)}

export default ShowMessage