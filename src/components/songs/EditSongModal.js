import React, { useState } from "react";
import { Modal } from 'react-bootstrap'
import SongForm from "../shared/SongForm";
import { updateSongSuccess, updateSongFailure } from '../shared/AutoDismissAlert/messages'
import { updateSong } from "../../api/songs";

const EditSongModal = (props) => {
    const { user, show, handleClose, msgAlert, triggerRefresh, song } = props
    const [newSong, setSong] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
      
        if (name === "embedId") {
          const embedIds = value ? value.split(",").map((id) => id.trim()) : null;
        //   console.log('embedIds', embedIds); // print the array of video IDs
          setSong((prevSong) => ({ ...prevSong, [name]: embedIds }));
        } else {
          setSong((prevSong) => ({ ...prevSong, [name]: value }));
        }
      };
      
    const handleSubmit = (e) => {
        e.preventDefault()

        updateSong(user, newSong, song)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: updateSongSuccess,
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch((error) => 
                msgAlert({
                    heading: 'Oh No!',
                    message: updateSongFailure,
                    variant: 'danger'
                }))
    }    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <SongForm 
                    song={song} 
                    handleChange={handleChange} 
                    handleSubmit={handleSubmit} 
                    heading="Update Song" />
            </Modal.Body>
        </Modal>
    )
}

 export default EditSongModal