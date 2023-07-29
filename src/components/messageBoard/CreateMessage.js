import MessageBoardForm from '../shared/MessageBoardForm'
import { createMessage } from '../../api/messageboard'
import { useNavigate } from 'react-router-dom'
import { createMessageSuccess, createMessageFailure } from '../shared/AutoDismissAlert/messages'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'

const CreateMessage = (props) => {
    const { user, msgAlert, show, handleClose, triggerRefresh } = props
    const navigate = useNavigate()
    const [message, setMessageBoard] = useState({
        // hopefully dont need
        // title: '',
		// content: '',
        // name: ''
    })
    const [fileName, setFileName] = useState({})

    const onChangeFile = (e) => {
        setFileName(e.target.files[0])
    };

    const handleChange = (e) => {
        setMessageBoard(prevMessage => {
            const updatedValue = e.target.value 
            const updatedName = e.target.name 
            const updatedMessage = {
                [updatedName]: updatedValue
            }
            return {
                ...prevMessage,
                ...updatedMessage,
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        createMessage(user, message, fileName)
            .then(res => { navigate(`/messageboard/${res.data.message._id}`)})
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: createMessageSuccess,
                    variant: 'success'
                })
            })
            .catch((error) => 
                msgAlert({
                    heading: 'Oh No!',
                    message: createMessageFailure,
                    variant: 'danger'
                }))
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body >
                <MessageBoardForm 
                            message={message} 
                            handleSubmit={handleSubmit} 
                            handleChange={handleChange} 
                            onChangeFile={onChangeFile}/>
                </Modal.Body>
        </Modal>
                )
}

export default CreateMessage