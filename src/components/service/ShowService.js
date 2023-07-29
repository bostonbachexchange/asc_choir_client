import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// import apiUrl from '../../apiConfig'
import LoadingScreen from '../shared/LoadingScreen'
import { getSongs } from '../../api/songs'
import { getOneService, updateService, removeService } from '../../api/sundayservice'
// import messages from '../shared/AutoDismissAlert/messages'
import { Button, Card, Container } from 'react-bootstrap'
import { Link } from "react-router-dom"
import EditServiceModal from './EditServiceModal'
import dateFormat from 'dateformat'

const ShowService = (props) => {
    const [service, setService] = useState({})
    const [songs, setSongs] = useState({})
    const [editModalShow, setEditModalShow] = useState(false)
    const [updated, setUpdated] = useState(false)

    const { id } = useParams()
    const { msgAlert, user } = props
    const navigate = useNavigate()

    useEffect(() => {
        getOneService(id)
            .then(res => {
                setService(res.data.sundayservice)
            })
            .catch(err => {
                msgAlert({
                    heading: 'Error getting service',
                    message: "Failure getting service",
                    variant: 'danger'
                })
                navigate('/')
            })
        getSongs()
            .then(res => {
                setSongs(res.data.songs)
            })
            .catch(err => {
                msgAlert({
                    heading: 'Error getting songs',
                    message: "Failure getting songs",
                    variant: 'danger'
                })
                navigate('/')
            })
    }, [updated])

    if (!service) {
        return <LoadingScreen />
    }

    const createSongLink = (checker) => {
        for(let i = 0; i < songs.length; i++){
            if(songs[i].title === checker){
                return <Link to={`/songs/${songs[i]._id}`}>{songs[i].title}</Link>
            } 
        }
        return checker
    }

    const removeTheService = () => {
        removeService(user, service._id)
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: "Remove service success",
                    variant: 'success'
                })
            })
            .then(() => {navigate('/')})
            .catch(err => {
                msgAlert({
                    heading: 'Error removing service',
                    message: "Remove service failure",
                    variant: 'danger'
                })
            })
    }
	const musicBorder = {
		border: '1px solid rgba(180, 180, 180)',
		backgroundColor: 'white',
		fontSize: 30, 
		padding: 20,
	};
	const dateHeading = {
		fontSize: "1.5em", 
		padding: 20,
	};
    const createDate=(dateData) => {
        if (!dateData) {
            return ""; 
          }
        return dateFormat(dateData.replace(/-/g, '\/').replace(/T.+/, ''), "dddd, mmmm dS")
    }
    return (
        <>
        <Container className='m-auto fluid playFont' style={{fontSize: '1.4em'}}>
            <Card>
                <Card.Header className='text-center'>
                    <h2>{createDate(service.date)}</h2>
                </Card.Header>
				<h1 className='pt-2 text-center' style={dateHeading}>
					Minister <strong>{service.minister}</strong>
				</h1>
                <Card.Body>
                    <div style={musicBorder} >
                        <strong>Prelude: </strong> 
                        {createSongLink(service.prelude)}
                        <br></br>
                        <>{service.preludePerformer}</>
                    </div>
                    <div style={musicBorder}>
                        <strong>Chalice Song: </strong> 
                        {createSongLink(service.chaliceSong)}
                        <br></br>
                        {service.chaliceSongPerformer}
                    </div>
                    <div style={musicBorder}>
                        <strong>Opening Hymn: </strong> 
                        {service.openingHymnNumber} 
                        {createSongLink(service.openingHymn)}
                        <br></br>
                        {service.openingHymnPerformer}
                    </div>
                    <div style={musicBorder}>
                        <strong>Centering Music: </strong> {service.centeringHymnNumber} 
                        {createSongLink(service.centeringHymn)}
                        <br></br>
                        {service.centeringHymnPerformer} 
                    </div>
                    <div style={musicBorder}>
                        <strong>Offertory: </strong> 
                        {createSongLink(service.offertory)}
                        <br></br>
                        {service.offertoryPerformer} 
                    </div>			
                    <div style={musicBorder}>
                        <strong>Closing Hymn: </strong> 
                        {service.closingHymnNumber} 
                        {createSongLink(service.closingHymn)}
                        <br></br>
                        {service.closingHymnPerformer}
                    </div>
                    <div style={musicBorder}>
                        <strong>Postlude: </strong> 
                        {createSongLink(service.postlude)}
                        <br></br>
                        {service.postludePerformer}
                    </div>
                </Card.Body>

                <Card.Footer className='text-center'>
                    {
                        service.owner === user._id 
                        ?
                        <>
                            <Button onClick={() => setEditModalShow(true)} className="m-2" variant="warning">
                            Edit Service
                            </Button>
                            <Button onClick={() => removeTheService()} className="m-2" variant="danger">
                                Delete The Service
                            </Button>
                        </>
                    :
                    <p>Only an Admin can edit services</p>
                    }
                </Card.Footer>
            </Card>
        </Container>
        <EditServiceModal 
            user={user}
            service={service}
            show={editModalShow}
            updateService={updateService}
            msgAlert={msgAlert}
            triggerRefresh={() => setUpdated(!updated)}
            handleClose={() => setEditModalShow(false)}
            />
        </>
    )
}

export default ShowService