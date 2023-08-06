import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen'
import { getCRSongs } from '../../api/songs'
import messages from '../shared/AutoDismissAlert/messages'
import MusicHeader from '../shared/MusicHeader'

const ChoralResponsesIndex = (props) => {
    const [songs, setStjSongs] = useState(null)
    const [error, setError] = useState(false)
    const [searchQuery, setSearchQuery] = useState('');

    const { msgAlert } = props
    useEffect(() => {
        getCRSongs()
            .then(res => setStjSongs(res.data.songs))
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
        <Card key={song.id} className=' playFont' style={songCardInfo}>
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
                    <h1 style={{color: 'whitesmoke', paddingTop: "10px"}} className='justify-content-center align-items-center d-flex'>Choral Responses</h1>
                </div>
                <div className='w-100 bg-dark justify-content-center align-items-center d-flex mt-0 pb-3'>
                    <img className="mt-0" style={{ height: '150px', radius: '15px'}} src="https://www.uuabookstore.org/Assets/ProductImages/7213.jpg" alt="Hymnal" />
                </div>
            </div>
            <MusicHeader/>
            <Card style={{ display: 'block' }} className='p-2 fs-5 text-center'>
                <label className='p-2' htmlFor='search'>Search:</label>
                <input className='p-2 w-50' id='search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </Card>
        {songCards}
        </>
    )
}

export default ChoralResponsesIndex