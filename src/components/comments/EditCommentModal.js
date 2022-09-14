import React, { useState } from "react";
import { Modal } from 'react-bootstrap'
import CommentForm from "../shared/CommentForm";
import { updateComment } from '../../api/comments'

const EditCommentModal = (props) => {
    // console.log('props.user', props.user)    
    const { user, message, show, handleClose, msgAlert, updated, setUpdated, commentID } = props
    const [comment, setComment] = useState(props.comment)
    console.log("commentID", commentID)
    console.log('user', user)
    const handleChange = (e) => {
        setComment(prevComment => {
            const value = e.target.value 
            const name = e.target.name 

            const updatedComment = {
                [name]: value
            }
            return {
                ...prevComment,
                ...updatedComment
            }
        })
    }
console.log('We are in EditCommentModal')
    const handleSubmit = (e) => {
        e.preventDefault()
        updateComment(user, message._id, commentID, comment)
            // .then(() => comment.owner = user._id)
            .then(() => handleClose())
            // .then(() => console.log('this is the update comment submit'))
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: "Great!, Nice Comment",
                    variant: 'success'
                })
            })
            .then(() => setUpdated(!updated))
            .catch((error) => {
                console.log('error', error)
                msgAlert({
                    heading: 'Oh No!',
                    message: 'Something went wrong, please try again',
                    variant: 'danger'
                })})
    }    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <CommentForm comment={comment} handleChange={handleChange} handleSubmit={handleSubmit} heading="Udate a Comment" />
                {/* <CommentForm comment={comment} handleChange={handleChange} handleSubmit={handleSubmit} heading="Udate a Comment" /> */}
            </Modal.Body>
        </Modal>
    )
}

 export default EditCommentModal