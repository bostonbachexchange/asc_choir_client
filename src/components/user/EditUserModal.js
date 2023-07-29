import React, { useState } from "react";
import { Modal } from 'react-bootstrap'
import UserForm from "../shared/UserForm";
// import msgAlert from '../'
import { useEffect } from "react";
import { updateProfile } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const EditProfileModal = (props) => {
    const { user, setUser, show, handleClose, msgAlert, triggerRefresh } = props
    // const [newProfile, setProfile] = useState({
    //   settings: {
    //     receiveEmailNotifications: true,
    //     receiveServiceNotifications: true,
    //   },
    // });
    const [newProfile, setProfile] = useState({
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      preferredContact: user.preferredContact,
      vocalRange: user.vocalRange,
      pronouns: user.pronouns,
      settings: {
        receiveBlogNotifications: user.settings.receiveBlogNotifications,
        receiveServiceNotifications: user.settings.receiveServiceNotifications,
      },
    });
    const [fileName, setFileName] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
          // The user object has changed, update the component's local state
          setProfile({
            ...newProfile,
          });
        }
      }, [user]);
      

    const onChangeFile = (e) => {
        setFileName(e.target.files[0])
    };
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      if (type === 'radio') {
        // Handle radio buttons separately
        if (name.startsWith('settings.')) {
          const settingName = name.split('.')[1]; // Extract the setting name (receiveBlogNotifications or receiveServiceNotifications)
          setProfile((prevProfile) => ({
            ...prevProfile,
            settings: {
              ...prevProfile.settings,
              [settingName]: value === 'true', // Convert the string value to a boolean
            },
          }));
        } else {
          setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
          }));
        }
      } else {
        // Handle other form fields
        setProfile((prevProfile) => ({
          ...prevProfile,
          [name]: value,
        }));
      }
    };
    
  
     
    const handleSubmit = (e) => {
      e.preventDefault();
    
      updateProfile(user, newProfile, fileName)
        .then((res) => {
          setUser(res.user); // Update the user state with the updated data
        })
        .then(() => {
          handleClose();
          msgAlert({
            heading: 'Oh Yeah!',
            message: 'Update Profile Success',
            variant: 'success',
          });
          triggerRefresh(); // Refresh the data after the update is successful
        })
        navigate("/sign-in")
        .catch((error) => {
          console.error('Error:', error); // Log the error to the console
          msgAlert({
            heading: 'Oh No!',
            message: 'Update Profile Failure',
            variant: 'danger',
          });
        });
    };
   
      
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body >
                <UserForm 
                    newProfile={newProfile} 
                    handleChange={handleChange} 
                    handleSubmit={handleSubmit} 
                    onChangeFile={onChangeFile} 
                    heading="Update Profile" />
            </Modal.Body>
        </Modal>
    )
}

 export default EditProfileModal