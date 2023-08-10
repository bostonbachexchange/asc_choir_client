import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen'
import { getSundayService } from '../../api/sundayservice'
import dateFormat from 'dateformat'
import apiUrl from '../../apiConfig'
import { Container } from 'react-bootstrap'
import serviceImage from '../../images/pexels-pixabay-206447.jpg'

const ServicesIndex = (props) => {
    const [services, setServices] = useState(null)
    const [error, setError] = useState(false)
    const { msgAlert } = props
    useEffect(() => {
        getSundayService()
            .then(res => {
                setServices(res.data.sundayservice)
            })
            .catch(err => {
                msgAlert({
                    heading: 'Error Getting Songs',
                    message: "Get Services Failure",
                    variant: 'danger',
                })
                setError(true)
            })
    }, [])

    if (error) {
        return <p>Error!</p>
    }
    if (!services) {
        return <LoadingScreen />
    } else if (services.length === 0) {
        return <p>No services yet. Check back soon.</p>
    }
    
    const createDate=(dateData) => {
        return dateFormat(dateData.replace(/-/g, '\/').replace(/T.+/, ''), "dddd, mmmm dS")
    }

    const currentDate = new Date();

    const upcomingServiceCards = services.filter(event => Date.parse(event.date) > currentDate.getTime()).map(service => {
      
        const servicePictureSrc =
        service.image === 'default'
        ? serviceImage
        : `${apiUrl}/${service.image}`; 

        return (
        <Card.Body key={service._id} className='mb-2 playFont text-center d-inline-block m-2' style={{ fontSize: '1.5em', width: '100%', maxWidth: '300px'}}>
                <Link to={`/sundayservice/${service._id}`} className='link' style={{textDecoration: 'none'}}>
                    <Card.Text className='text-center' style={{textDecoration: 'none'}}>
                        <h2>{service.theme} </h2>
                        <small>{createDate(service.date)}</small>
                    </Card.Text>
                    <div >
                        <img 
                            style={{width: "250px", height: "215px", borderRadius: '15px', marginTop: "5px"}}
                            src={servicePictureSrc} />
                            {/* src={`${apiUrl}/${service.image}`} /> */}
                    </div>
                    <Card.Text>
                        <small>with {service.minister}</small>
                    </Card.Text>
                </Link>
            </Card.Body>)
    })
        
    const pastServiceCards = services
        .filter(event => Date.parse(event.date) < currentDate.getTime())
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
        .map(service => {

        const servicePictureSrc =
            service.image === 'default'
            ? serviceImage
            : `${apiUrl}/${service.image}`; 

            return (
            
                <Card.Body key={service._id} className='mb-2 playFont text-center d-inline-block m-2' style={{ fontSize: '1.5em', width: '100%', maxWidth: '300px'}}>
                    <Link to={`/sundayservice/${service._id}`} className='link' style={{textDecoration: 'none'}}>
                    <Card.Text className='text-center mb-0' style={{color: '#e7a713'}}>
                        <h2 className='m-0'>{service.theme} </h2>
                        <small style={{color: 'grey'}}>{createDate(service.date)}</small>
                    </Card.Text>
                    <div>
                        <img 
                            style={{width: "250px", height: "215px", borderRadius: '15px', marginTop: "5px"}}
                            src={servicePictureSrc} />
                    </div>
                    <Card.Text>
                        <small style={{color: 'grey'}}>with {service.minister}</small>
                    </Card.Text>
                </Link>
            </Card.Body>
        )        
    })
    
        return (
            <>
                <h3><strong>Upcoming Services</strong></h3>
                {
                    upcomingServiceCards.length < 1 ? (
                        <p>No upcoming services. Check back soon.</p>
                        ) : (
                            <Container 
                            >
                            {upcomingServiceCards}
                        </Container>
                    )
                }
                <hr></hr>
                <h3><strong>Past Services</strong></h3>
                <Container 
                    >      
                        {pastServiceCards}
                </Container>
                <hr></hr>
            </>
    )
}

export default ServicesIndex