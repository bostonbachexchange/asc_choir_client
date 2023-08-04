import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen'
import { getSongs } from '../../api/songs'
import messages from '../shared/AutoDismissAlert/messages'
import { Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'

const linkStyle = {
    display: 'flex',
    color: 'teal',
    textDecoration: 'none',
	fontSize: '1.5em',
	marginRight: 30,
    minWidth: "100px",
}

const SongsIndex = (props) => {
    const [songs, setSongs] = useState(null)
    const [error, setError] = useState(false)
    const [searchQuery, setSearchQuery] = useState('');
    const { msgAlert } = props

    useEffect(() => {
        getSongs()
            .then(res => setSongs(res.data.songs))
            .catch(err => {
                msgAlert({
                    heading: 'Error Getting Songs',
                    message: messages.getSongsFailure,
                    variant: 'danger',
                })
                setError(true)
            })
    }, [])

    if (error) {
        return <p>Error!</p>
    }
    if (!songs) {
        return <LoadingScreen />
    } else if (songs.length === 0) {
        return <p>No songs yet. Better add some.</p>
    }

    const songCardInfo = {
        width: 'auto',
        padding: 15,
        fontSize: '1.5em',
    };

    const filteredSongs = searchQuery
    ? songs.filter((song) =>
        Object.values(song).some(
          (value) =>
            value && value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : songs;

    const songCards = filteredSongs.map(song => 
        
        <Card className=' playFont' style={songCardInfo}>
            <Card.Header>
                <h3><strong><Link to={`/songs/${song._id}`}>{song.hymnNumber} {song.title}</Link></strong></h3>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <div>Music by {song.composer ?(<em>{song.composer}</em>) : (<em>Unknown</em>)}</div> 
                    <div>Lyrics by {song.lyricist ?(<em>{song.lyricist}</em>) : (<em>Unknown</em>)}</div>
                    <div>Includes: 
                        {song.lyrics ?(<small> lyrics</small>) : (null)}
                        {song.recordings ?(<small>, recordings</small>) : (null)}
                        {(song.embedId.length > 0) ?(<small>, video</small>) : (null)}
                        {song.scorePDF ?(<small>, score</small>) : (null)}
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
        )
    return (
        <>
            <div className='w-100 bg-dark mb-0'>
                <hr style={{color: "white", scale: '2em', marginTop: "0"}}></hr>
                <div>
                    <h1 style={{color: 'whitesmoke'}} className='justify-content-center align-items-center d-flex'>Music Database</h1>
                </div>
                <div className='w-100 bg-dark justify-content-center align-items-center d-flex mt-0 pb-3'>
                    <p style={{color: "white"}}>Use the search to find a specific piece of music.</p>
                </div>
            </div>
            <Navbar className='bg-light d-flex flex-wrap justify-content-center'>
                <Nav.Item className=' playFont m-auto'>
                    <Link to='/choralresponses' style={linkStyle}>
                    <span className=''>Choral Responses</span>
                    </Link>
                </Nav.Item>
                <Nav.Item className=' playFont m-auto'>
                    <Link to='/singingthelivingtradition' style={linkStyle}>
                    <span className=''>Singing The Living Tradition</span>
                    </Link>
                </Nav.Item>
                <Nav.Item className=' playFont m-auto'>
                    <Link to='/singingthejourney' style={linkStyle}>
                    <span className=''>Singing The Journey</span>
                    </Link>
                </Nav.Item>
            </Navbar>
            <Card style={{ display: 'block' }} className='p-2 fs-5 text-center'>
                <label className='p-2' htmlFor='search'>Search:</label>
                <input className='p-2 w-50' id='search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </Card>
        {songCards}
        </>
    )
}

export default SongsIndex