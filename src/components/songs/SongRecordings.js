import ReactAudioPlayer from 'react-audio-player'
import { Card } from 'react-bootstrap'
// audio
import CR11_soprano from '../../audio/11_Chalice_Song_Soprano.mp3'
import CR11_alto from '../../audio/11_Chalice_Song_Alto.mp3'
import CR11_tenor from '../../audio/11_Chalice_Song_Tenor.mp3'
import CR11_bass from '../../audio/11_Chalice_Song_Bass.mp3'
import CR11_satb from '../../audio/11_Chalice_Song_SATB.mp3'
import CR5_soprano from '../../audio/5_Joy_Introit_soprano.mp3'
import CR5_alto from '../../audio/5_Joy_Introit_alto.mp3'
import CR5_tenor from '../../audio/5_Joy_Introit_tenor.mp3'
import CR5_bass from '../../audio/5_Joy_Introit_bass.mp3'
import CR5_piano from '../../audio/5_Joy_Introit_piano.mp3'
import CR5_satb from '../../audio/5_Joy_Introit_allparts.mp3'
import SWJ_allparts from '../../audio/Sing_With_Joy_Sing_Noel_allparts.mp3'
import SWJ_piano from '../../audio/ Sing_With_Joy_Sing_Noel_piano.mp3'
import SWJ_soprano from '../../audio/Sing_With_Joy_Sing_Noel_soprano.mp3'
import SWJ_alto from '../../audio/Sing_With_Joy_Sing_Noel_alto.mp3'
import SWJ_tenor from '../../audio/Sing_With_Joy_Sing_Noel_tenor.mp3'
import SWJ_bass from '../../audio/Sing_With_Joy_Sing_Noel_bass.mp3'

const tuneMap = {CR5_soprano, CR5_alto, CR5_tenor, CR5_bass, CR5_satb, CR5_piano, CR11_soprano, CR11_alto, CR11_tenor, CR11_bass, CR11_satb, SWJ_allparts, SWJ_piano, SWJ_soprano, SWJ_alto, SWJ_tenor, SWJ_bass}


const SongRecordings = (props) => {
    const { song } = props
    console.log('song in SongRecordings', song)
    return (<>
        <p>HELLO WORLD</p>
                        {song.recordings ?(<div><strong>recordings:</strong> 
                            <Card className='m-2'>
                            <Card.Header><strong>Soprano</strong></Card.Header>
                            <Card.Body className='text-center'>
                                    <ReactAudioPlayer 
                                        src={
                                            tuneMap[song.recordings.soprano]
                                        }
                                        controls
                                />
                            </Card.Body>
                            </Card>
                            <Card className='m-2'>
                            <Card.Header><strong>Alto</strong></Card.Header>
                            <Card.Body className='text-center'>
                                    <ReactAudioPlayer 
                                        src={
                                            tuneMap[song.recordings.alto]
                                        }
                                        controls
                                />
                            </Card.Body>
                            </Card>
                            <Card className='m-2'>
                            <Card.Header><strong>Tenor</strong></Card.Header>
                            <Card.Body className='text-center'>
                                    <ReactAudioPlayer 
                                        src={
                                            tuneMap[song.recordings.tenor]
                                        }
                                        controls
                                />
                            </Card.Body>
                            </Card>
                            <Card className='m-2'>
                            <Card.Header><strong>Bass</strong></Card.Header>
                            <Card.Body className='text-center'>
                                    <ReactAudioPlayer 
                                        src={
                                            tuneMap[song.recordings.bass]
                                        }
                                        controls
                                />
                            </Card.Body>
                            </Card>
                            <Card className='m-2'>
                            <Card.Header><strong>All Parts</strong></Card.Header>
                            <Card.Body className='text-center'>
                                    <ReactAudioPlayer 
                                        src={
                                            tuneMap[song.recordings.satb]
                                        }
                                        controls
                                />
                            </Card.Body>
                            </Card>
                            <Card className='m-2'>
                            <Card.Header><strong>Piano</strong></Card.Header>
                            <Card.Body className='text-center'>
                                    <ReactAudioPlayer 
                                        src={
                                            tuneMap[song.recordings.piano]
                                        }
                                        controls
                                />
                            </Card.Body>
                            </Card>
                            </div>) 
                        : (null)}
        </>)

}

export default SongRecordings