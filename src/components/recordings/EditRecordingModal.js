import React, { useState } from "react";
import { Modal } from 'react-bootstrap';
import RecordingForm from "../shared/RecordingForm";
import { updateRecording } from '../../api/recordings';

const EditRecordingModal = (props) => {  
    const { user, song, show, handleClose, msgAlert, updated, setUpdated, recording } = props;
    const [editedRecording, setEditedRecording] = useState({ ...recording });

    const handleChange = (e) => {
        setEditedRecording(prevRecording => {
            const value = e.target.value;
            const name = e.target.name;

            const updatedRecording = {
                [name]: value
            };
            return {
                ...prevRecording,
                ...updatedRecording
            };
        });
    };

    const handleFileChange = (e) => {
        setEditedRecording(prevRecording => {
            const file = e.target.files[0];
            return {
                ...prevRecording,
                audio: file
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', editedRecording.name);
        formData.append('audio', editedRecording.audio);

        updateRecording(user, song._id, recording._id, formData)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Success!',
                    message: "Recording updated successfully.",
                    variant: 'success'
                });
            })
            .then(() => setUpdated(!updated))
            .catch((error) => {
                console.log('error', error)
                msgAlert({
                    heading: 'Oh No!',
                    message: 'Something went wrong, please try again',
                    variant: 'danger'
                });
            });
    };    

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <RecordingForm
                    song={song}
                    recording={editedRecording}
                    handleChange={handleChange}
                    handleFileChange={handleFileChange}
                    handleSubmit={handleSubmit}
                    heading="Update Recording"
                />
            </Modal.Body>
        </Modal>
    );
};

export default EditRecordingModal;
