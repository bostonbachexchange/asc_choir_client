import MessageBoardForm from '../shared/MessageBoardForm'
import { createMessage } from '../../api/messageboard'
import { useNavigate } from 'react-router-dom'
import { createMessageSuccess, createMessageFailure } from '../shared/AutoDismissAlert/messages'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useEffect } from 'react'
import { getUserAccounts } from "../../api/admin"
import emailjs from 'emailjs-com'


const CreateMessage = (props) => {
    const { user, msgAlert, show, handleClose } = props
    
    const navigate = useNavigate()
    const [accounts, setAccounts] = useState(null)
    const [message, setMessageBoard] = useState({})
    const [fileName, setFileName] = useState({})
    
    const emailjsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const emailjsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const emailjsUserId = process.env.REACT_APP_EMAILJS_USER_ID;

    useEffect(() => {
        getUserAccounts()
            .then(res => {
                setAccounts(res.data.accounts
                    .filter(account => account.settings.receiveBlogNotifications === true).map(account => account.email)
                )
            })
            .catch(err => {
                console.log('there was an error', err);
                msgAlert({
                    heading: 'Error Getting Emails',
                    message: "Something went wrong",
                    variant: 'danger',
                });
            });
    });

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
        setMessageBoard({emailList: [accounts]})
        const data = {title: message.title, emailList: accounts.join(", "), content: message.content}
        emailjs
            .send(emailjsServiceId, emailjsTemplateId, data, emailjsUserId)
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
                            heading="Create a Blog"
                            handleSubmit={handleSubmit} 
                            handleChange={handleChange} 
                            onChangeFile={onChangeFile}/>
                </Modal.Body>
        </Modal>
                )
}

export default CreateMessage