import React, { useState } from "react";
import { Modal } from 'react-bootstrap'
import ServiceForm from "../shared/ServiceForm";

import { updateService } from "../../api/sundayservice";

const EditServiceModal = (props) => {
    const { user, show, handleClose, msgAlert, triggerRefresh, service } = props
    const [newService, setService] = useState( service );
    const [fileName, setFileName] = useState({})

    const onChangeFile = (e) => {
        setFileName(e.target.files[0])
    };
    
    const handleChange = (e) => {
        setService(prevService => {
            const updatedValue = e.target.value 
            const updatedName = e.target.name 
            const updatedService = {
                [updatedName]: updatedValue
            }
            return {
                ...prevService,
                ...updatedService
            }
        })
    }   
    const handleSubmit = (e) => {
        e.preventDefault()

        updateService(user, newService, service, fileName)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: "update Service Success",
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch((error) => 
                msgAlert({
                    heading: 'Oh No!',
                    message: "update Service Failure",
                    variant: 'danger'
                }))
    }    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <ServiceForm 
                    newService={newService} 
                    handleChange={handleChange} 
                    handleSubmit={handleSubmit} 
                    onChangeFile={onChangeFile} 
                    heading="Update Service" />
            </Modal.Body>
        </Modal>
    )
}

 export default EditServiceModal