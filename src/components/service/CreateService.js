import ServiceForm from '../shared/ServiceForm'
import { createService } from '../../api/sundayservice'
import { useNavigate } from 'react-router-dom'
// import { createSongSuccess, createSongFailure } from '../shared/AutoDismissAlert/messages'
import { useState } from 'react'

const CreateService = (props) => {
    const { user, msgAlert } = props
    const navigate = useNavigate()
    const [service, setService] = useState({})
    const [fileName, setFileName] = useState({})

    const onChangeFile = (e) => {
        setFileName(e.target.files[0])
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
            setService((prevSong) => ({ 
            ...prevSong, 
            [name]: value 
        }));
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        createService(user, service, fileName)
            // update to navigate to new service in show service rather than index
            .then(res => { navigate(`/`)})
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: "create Service Success",
                    variant: 'success'
                })
            })
            .catch((error) => 
                msgAlert({
                    heading: 'Oh No!',
                    message: "create Service Failure",
                    variant: 'danger'
                }))
    }

    return <ServiceForm 
                newService={service} 
                handleSubmit={handleSubmit} 
                handleChange={handleChange} 
                onChangeFile={onChangeFile}/>
}

export default CreateService