import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import LoadingScreen from '../shared/LoadingScreen'
import { getStltSongs } from '../../api/songs'
import messages from '../shared/AutoDismissAlert/messages'

const SingTheLivingTradition = (props) => {
    const [songs, setStltSongs] = useState(null)
    const [error, setError] = useState(false)
    const { msgAlert } = props
    useEffect(() => {
        console.log('Use effect ran, stlt')
        getStltSongs()
            .then(res => setStltSongs(res.data.songs))
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

    const songCards = songs.map(song => 
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
        <>{songCards}</>
    )
}

export default SingTheLivingTradition