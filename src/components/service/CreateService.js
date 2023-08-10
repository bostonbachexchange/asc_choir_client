import { createService } from '../../api/sundayservice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { getUserAccounts } from "../../api/admin"
import ServiceForm from '../shared/ServiceForm'
import emailjs from 'emailjs-com'


const CreateService = (props) => {
    const { user, msgAlert } = props
    const navigate = useNavigate()
    const [service, setService] = useState({})
    const [fileName, setFileName] = useState({})
    const [accounts, setAccounts] = useState(null)

    useEffect(() => {
        getUserAccounts()
            .then(res => {
                setAccounts(res.data.accounts
                    .filter(account => account.settings.receiveServiceNotifications === true).map(account => account.email)
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
    }, []);
    
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
// Helper function to convert numeric day to a string with the appropriate suffix
function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
  
  // Helper function to format the month name
  function getMonthName(month) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[month];
  }
  
  // Function to format the date in the desired format
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const daySuffix = getDaySuffix(day);
    const monthName = getMonthName(month);
    return `${monthName} ${day}${daySuffix}, ${year}`;
  }
  
  
    const handleSubmit = (e) => {
        e.preventDefault()
        createService(user, service, fileName)
        setService({emailList: [accounts]})
        const data = {
            date: formatDate(service.date), 
            minister: service.minister, 
            theme: service.theme, 
            prelude: service.prelude, 
            preludePerformer: service.preludePerformer, 
            openingHymn: service.openingHymn, 
            openingHymnPerformer: service.openingHymnPerformer, 
            openingHymnNumber: service.openingHymnNumber, 
            chaliceSong: service.chaliceSong, 
            chaliceSongPerformer: service.chaliceSongPerformer, 
            chaliceSongNumber: service.chaliceSongNumber, 
            centeringHymn: service.centeringHymn, 
            centeringHymnPerformer: service.centeringHymnPerformer, 
            centeringHymnNumber: service.centeringHymnNumber, 
            offertory: service.offertory, 
            offertoryNumber: service.offertoryNumber, 
            closingHymn: service.closingHymn, 
            closingHymnPerformer: service.closingHymnPerformer, 
            closingHymnNumber: service.closingHymnNumber, 
            postlude: service.postlude, 
            postludePerformer: service.postludePerformer, 
            postludeNumber: service.postludeNumber, 
            // emailList: accounts.join(", ")
            emailList: 'clapperdev@gmail.com'
        }
        console.log("data in CreateService: ", data)
        console.log('accounts...: ', accounts)
        emailjs
            .send('service_9kl4vne', 'template_rujez38', data, 'HbHIm15JTusAN4bt6')
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