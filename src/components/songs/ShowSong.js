import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import LoadingScreen from '../shared/LoadingScreen'
import { getOneSong, updateSong, removeSong, addSongToUser } from '../../api/songs'
import messages from '../shared/AutoDismissAlert/messages'
import { Button, Card, Container } from 'react-bootstrap'
import YoutubeEmbed from '../shared/YoutubeEmbed'
import EditSongModal from './EditSongModal'
import { Document, Page } from 'react-pdf'

// import ReactAudioPlayer from 'react-audio-player'
// // audio
// import CR11_soprano from '../../audio/11_Chalice_Song_Soprano.mp3'
// import CR11_alto from '../../audio/11_Chalice_Song_Alto.mp3'
// import CR11_tenor from '../../audio/11_Chalice_Song_Tenor.mp3'
// import CR11_bass from '../../audio/11_Chalice_Song_Bass.mp3'
// import CR11_satb from '../../audio/11_Chalice_Song_SATB.mp3'
// import CR5_soprano from '../../audio/5_Joy_Introit_soprano.mp3'
// import CR5_alto from '../../audio/5_Joy_Introit_alto.mp3'
// import CR5_tenor from '../../audio/5_Joy_Introit_tenor.mp3'
// import CR5_bass from '../../audio/5_Joy_Introit_bass.mp3'
// import CR5_piano from '../../audio/5_Joy_Introit_piano.mp3'
// import CR5_satb from '../../audio/5_Joy_Introit_allparts.mp3'
// scores
import CR5 from '../../scores/Joy_Introit_11.pdf'
import CR11 from '../../scores/chalice_song_11.pdf'
import STLT57 from '../../scores/all_beautiful_the_march_of_days_57.pdf'
import STLT188 from '../../scores/come_come_whoever_you_are_188.pdf'
import STLT121 from '../../scores/well_build_a_land_121.pdf'
import STLT317 from '../../scores/317_We_Are_Not_Our_Own.pdf'
import STLT318 from '../../scores/we_would_be_one_318.pdf'
import STLT336 from '../../scores/all_my_memories_of_love_336.pdf'
import STLT347 from '../../scores/gather_the_spirit_347.pdf'
import STLT387 from '../../scores/the_earth_water_fire_air_387.pdf'
import STLT216 from '../../scores/hashiveinu_216.pdf'
import STLT354 from '../../scores/we_laugh_we_cry_354.pdf'
import STLT389 from '../../scores/gathered_here_389.pdf'
import STJ1009 from '../../scores/1009_Meditation_on_Breathing.pdf'
import STJ1011 from '../../scores/return_again_1011.pdf'
import STJ1013 from '../../scores/1013_Open_My_Heart.pdf'
import STJ1014 from '../../scores/standing_on_the_side_of_love_1014.pdf'
import STJ1019 from '../../scores/everything_possible_1019.pdf'
import STJ1020 from '../../scores/1020_Woyaya.pdf'
import STJ1023 from '../../scores/building_bridges_1023.pdf'
import STJ1024 from '../../scores/when_the_spirit_says_do_1024.pdf'
import STJ1028 from '../../scores/1028_The_Fire_of_Commitment.pdf'
import STJ1037 from '../../scores/we_begin_again_in_love_1037.pdf'
import STJ1051 from '../../scores/we_are_1051.pdf'
import STJ1058 from '../../scores/be_ours_a_religion_1058.pdf'
import STJ1069 from '../../scores/ancient_mother_1069.pdf'
import makeMeAChannel from '../../scores/make_me_a_channel.pdf'
import SingWithJoy from '../../scores/Sing_With_Joy,Sing_Noel.pdf'
import SongRecordings from './SongRecordings'


// const tuneMap = {CR5_soprano, CR5_alto, CR5_tenor, CR5_bass, CR5_satb, CR5_piano, CR11_soprano, CR11_alto, CR11_tenor, CR11_bass, CR11_satb}
const scoreMap = {makeMeAChannel, SingWithJoy, CR5, CR11, STLT57, STLT188, STLT121, STLT216, STLT317, STLT318, STLT336, STLT347, STLT354, STLT387, STLT389, STJ1009, STJ1011, STJ1013, STJ1020, STJ1028, STJ1011, STJ1014, STJ1019, STJ1023, STJ1037, STJ1024, STJ1051, STJ1058, STJ1069}

const ShowSong = (props) => {
    const [song, setSong] = useState({})
    const [editModalShow, setEditModalShow] = useState(false)
    // const [audio, setAudio] = useState(null)
    const [updated, setUpdated] = useState(false)

    const { id } = useParams()
    const { msgAlert, user } = props
    console.log('user in showSong', user)
    console.log('song in showSong', song)
    const navigate = useNavigate()


    useEffect(() => {
        getOneSong(id)
            .then(res => {
                setSong(res.data.song)
            })
            .catch(err => {

                msgAlert({
                    heading: 'Error getting song',
                    message: messages.getSongsFailure,
                    variant: 'danger'
                })
                navigate('/')
            })
    }, [updated])

    if (!song) {
        return <LoadingScreen />
    }

    const removeTheSong = () => {
        removeSong(user, song._id)
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.removeSongSuccess,
                    variant: 'success'
                })
            })
            .then(() => {navigate('/songs')})
            .catch(err => {
                msgAlert({
                    heading: 'Error removing song',
                    message: messages.removeSongFailure,
                    variant: 'danger'
                })
            })
    }
    const addTheSong = () => {
        addSongToUser(user, song._id)
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: 'added song to user prof',
                    variant: 'success'
                })
            })
            .then(() =>  setUpdated(!updated))
            .catch(err => {
                msgAlert({
                    heading: 'Error adding song',
                    message: 'failed to add song to user',
                    variant: 'danger'
                })
            })
    }

    return (
        <>
        <Container className='m-auto fluid playFont' style={{fontSize: '1.4em'}}>
            <Card>
                <Card.Header className='text-center'><h2>#{song.hymnNumber} { song.title}</h2></Card.Header>
                <Card.Body>
                    <Card.Text>
                        {song.composer ?(<div><strong>composer:</strong> {song.composer}</div>) : (null)}
                        {song.lyricist ?(<div><strong>lyricist:</strong> {song.lyricist}</div>) : (null)}
                        {/* {song.recordings ?( song.recordings.map(recording => (
                        <>
                            <div><strong>recordings:</strong> 
                                <Card className='m-2'>
                                <Card.Header><strong>{recording.title}</strong></Card.Header>
                                <Card.Body className='text-center'>
                                        <ReactAudioPlayer 
                                            src={
                                                tuneMap[recording.file]
                                            }
                                            controls
                                    />
                                </Card.Body>
                                </Card>
                                </div> 
                        </>)))
                            : (null)} */}
                        <SongRecordings song={song}/>
                    <hr></hr>
                        {song.lyrics ?(<div><strong>Lyrics:</strong> {
                            song.lyrics.split("|").map(line => (
                                <div className='text-center'>{line}</div>)
                            ) 
                        }
                        </div>) : (null)}
                        <hr></hr>
                        { song.embedId?  ( <>
                        {(song.embedId.length !== 0 && song.embedId) ? 
                            ( 
                                <> 
                                {console.log('Is song.embedId:...?', song.embedId.length)}
                                <h2 className='text-center m-4'>Videos From Youtube</h2>
                                {
                                    song.embedId.map(Id => (<>
                                        <div className='m-2'>
                                            <YoutubeEmbed embedId={Id} />
                                        </div>
                                    </>)
                                    ) 
                                }
                                </>) : (null)} </>) : (null)}
                    </Card.Text>
                </Card.Body>
                {song.scorePDF ?(
                <>
                    <embed
                        src={
                            scoreMap[song.scorePDF]
                        }
                        type="application/pdf"
                        frameBorder="2"
                        scrolling="auto"
                        height="800"
                        width="100%"
                     ></embed>
                </>): (null) }

                {song.webScore ?(
                <>
                    {song.webScore.map(score => (
                        <>
                            <div className='m-2 text-center'>
                                <div><img title="Christian Science Hymnal: Hymns 430-603 page 140" src={score} alt="Christian Science Hymnal: Hymns 430-603 page 140"/></div>
                            </div>
                        </>)) 
                    }
                </>): (null) }

                <Card.Footer className='text-center'>
                    {
                        song.owner && user && song.owner._id === user._id 
                        ?
                        <>
                            <Button onClick={() => setEditModalShow(true)} className="m-2" variant="warning">
                            Edit Song
                            </Button>
                            <Button onClick={() => removeTheSong()} className="m-2" variant="danger">
                                Delete The Song
                            </Button>
                        </>
                    :
                    <p>Only an Admin can edit this song</p>
                    }
                    {/* <Button onClick={() => addTheSong()} className="m-2" variant="info">
                    Add to my repertoire list
                    </Button> */}
                </Card.Footer>
            </Card>
        </Container>
        <EditSongModal 
            user={user}
            song={song}
            show={editModalShow}
            updateSong={updateSong}
            msgAlert={msgAlert}
            triggerRefresh={() => setUpdated(!updated)}
            handleClose={() => setEditModalShow(false)}
            />
        </>
    )
}

export default ShowSong