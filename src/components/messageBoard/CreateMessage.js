import MessageBoardForm from '../shared/MessageBoardForm'
import { createMessage } from '../../api/messageboard'
import { useNavigate } from 'react-router-dom'
import { createMessageSuccess, createMessageFailure } from '../shared/AutoDismissAlert/messages'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import { Modal } from 'react-bootstrap'
import { getUserAccounts } from "../../api/admin"
import { useEffect } from 'react'

const CreateMessage = (props) => {
    const { user, msgAlert, show, handleClose, triggerRefresh } = props

    const navigate = useNavigate()
    const [accounts, setAccounts] = useState(null)
    const [message, setMessageBoard] = useState({
        emailList: ['clapperdev@gmail.com']
        // hopefully dont need
        // title: '',
		// content: '',
        // name: ''
    })
    const [fileName, setFileName] = useState({})

    useEffect(() => {
        getUserAccounts()
            .then(res => {
                setAccounts(res.data.accounts.filter(account => account.settings.receiveBlogNotifications == true));
                setMessageBoard({emailList: [accounts]})
                // console.log('Email accounts, State: ', res.data.accounts);
                // console.log('message ', message);
            })
            .catch(err => {
                console.log('there was an error', err);
                msgAlert({
                    heading: 'Error Getting Emails',
                    message: "Something went wrong",
                    variant: 'danger',
                });
            });
    }, []);
    

    // const recieveBlogsTrue = accounts.filter(account => account.settings.receiveBlogNotifications === true)

    // console.log('recieveBlogsTrue', recieveBlogsTrue)

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
        const data = {title: message.title, emailList: message.emailList.join(", "), content: message.content}
        console.log('data', data)
        emailjs
            .send('service_6ua4q8w', 'template_vkey9oh', data, '38n3G7bbp-a_O5PNa')
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