import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen'
import { getSundayService } from '../../api/sundayservice'
import dateFormat from 'dateformat'
import apiUrl from '../../apiConfig'
import { Container } from 'react-bootstrap'

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
    
    const upcomingServiceCards = services.filter(event => Date.parse(event.date) > currentDate.getTime()).map(service => 
        <Card.Body className='mb-2 playFont text-center d-inline-block m-2' style={{ fontSize: '1.5em', width: '100%', maxWidth: '300px'}}>
                <Link to={`/sundayservice/${service._id}`} className='link'>
                    <Card.Text className='text-center' style={{textDecorationLine: 'none'}}>
                        <h2>{service.theme} with {service.minister}</h2>
                    </Card.Text>
                    <div >
                        <img 
                            style={{width: "250px", height: "215px", borderRadius: '15px', marginTop: "5px"}}
                            src={`${apiUrl}/${service.image}`} />
                    </div>
                    <Card.Text>
                        {createDate(service.date)}
                    </Card.Text>
                </Link>
            </Card.Body>
        )
        
        const pastServiceCards = services.filter(event => Date.parse(event.date) < currentDate.getTime()).map(service => 
            <Card.Body className='mb-2 playFont text-center d-inline-block m-2' style={{ fontSize: '1.5em', width: '100%', maxWidth: '300px'}}>
        <Link to={`/sundayservice/${service._id}`} className='link'>
            <Card.Text className='text-center' style={{textDecorationLine: 'none'}}>
                <h2>{service.theme} with {service.minister}</h2>
            </Card.Text>
            <div >
                <img 
                    style={{width: "250px", height: "215px", borderRadius: '15px', marginTop: "5px"}}
                    src={`${apiUrl}/${service.image}`} />
            </div>
            <Card.Text>
                {createDate(service.date)}
            </Card.Text>
        </Link>
    </Card.Body>
        )
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