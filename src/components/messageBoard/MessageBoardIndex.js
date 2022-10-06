import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen'
import { getMessageBoard } from '../../api/messageboard'
import messages from '../shared/AutoDismissAlert/messages'
import CommentForm from '../shared/CommentForm'
import messageboardphoto from '../../images/messageboard.jpg'

const MessageBoardIndex = (props) => {
    const [messageboard, setMessageBoard] = useState(null)
    const [error, setError] = useState(false)
    const { msgAlert } = props
    useEffect(() => {
        getMessageBoard()
            // .then(res => console.log('res.data.messageboard', res.data.messageboard))
            .then(res => setMessageBoard(res.data.messageboard))
            .catch(err => {
                // console.log(err)
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
                    {/* <img style={{width: 130}} className="m-auto" src={messageboardphoto}></img> */}
                    <Card className='text-center m-4 w-2'>
                        <p className='m-0'><em>No Meesage Board Posts Yet</em></p>
                        <p className='m-0'>Say Hello!</p>
                    </Card>
                </>
    }

    const messageboardCards = messageboard.map(messagepost =>
        <>
            <Card key={messagepost._id} className='text-center m-2 playFont'>
                <Card.Header><strong>{messagepost.title}</strong> by <em>{messagepost.owner.email}</em></Card.Header>
                <Card.Body className='p-1'>
                    <Card.Text>
                        <div className='text-center'><Link to={`/messageboard/${messagepost._id}`}><span> {messagepost.content}</span></Link></div>
                        <hr></hr>
                        <small className='m-1'>{messagepost.comments.length} <em>comments</em></small>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
    
    return (
        <>
            <h1 className='m-2 playFont text-center'>Community Message Board</h1>
            <hr></hr>
            <div className='m-2 playFont'>{messageboardCards}</div>
        </>
    )
}

export default MessageBoardIndex