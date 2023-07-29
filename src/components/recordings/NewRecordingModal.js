import React, { useState } from "react";
import { Modal } from 'react-bootstrap';
import RecordingForm from "../shared/RecordingForm";
import { createRecording } from '../../api/recordings';

const NewRecordingModal = (props) => {
    const { user, song, show, handleClose, msgAlert, triggerRefresh } = props;
    const [recording, setRecording] = useState({});
    // const [service, setService] = useState({})
    const [fileName, setFileName] = useState({})

    const onChangeFile = (e) => {
        setFileName(e.target.files[0])
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecording((prevRec) => ({ ...prevRec, [name]: value }));
      };
    // const handleChange = (e) => {
    //     setRecording(prevRecording => {
    //         const value = e.target.value;
    //         const name = e.target.name;

    //         const updatedRecording = {
    //             [name]: value
    //         };
    //         return {
    //             ...prevRecording,
    //             ...updatedRecording
    //         };
    //     });
    // };

    // const handleFileChange = (e) => {
    //     setFileName(prevRecording => {
    //         const file = e.target.files[0];
    //         return {
    //             ...prevRecording,
    //             audio: file
    //         };
    //     });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('recording', JSON.stringify(recording)); // No need to stringify the object
        formData.append('file', fileName); // Replace audioFile with the actual audio file
    
        createRecording(user, song._id, formData)
        // const formData = new FormData();
        // formData.append('name', recording.name);
        // formData.append('audio', recording.audio);

        // createRecording(user, song._id, recording, fileName)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Success!',
                    message: "Recording added successfully.",
                    variant: 'success'
                });
            })
            .then(() => triggerRefresh())
            .catch((error) => 
                msgAlert({
                    heading: 'Error!',
                    message: 'Something went wrong, please try again.',
                    variant: 'danger'
                }));
    };
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <RecordingForm
                    song={song}
                    recording={recording}
                    handleChange={handleChange}
                    handleFileChange={onChangeFile}
                    handleSubmit={handleSubmit}
                    heading="Add a New Recording"
                />
            </Modal.Body>
        </Modal>
    );
};

export default NewRecordingModal;
