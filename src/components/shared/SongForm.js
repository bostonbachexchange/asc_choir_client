import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SongForm = (props) => {
    const { song, fileName, handleChange, handleSubmit, onChangeFile } = props

    return <>
            <Form className='m-5 playFont bg-light p-2' onSubmit={handleSubmit} name="uploaded_file">
                <h3>Add a New Song to Our Collection</h3>
                <hr></hr>
                <Form.Group className="mb-3" >
                    <Form.Label column sm="2" htmlFor="title">Song Title</Form.Label>
                        <Form.Control className="w-50" placeholder="Title of the song" value={song.title} name="title" id="title" onChange={ handleChange }/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="hymnNumber">Hymn Number</Form.Label>
                    <Form.Control className="w-50" placeholder="Hymn Number" value={song.hymnNumber} name="hymnNumber" id="hymnNumber" onChange={ handleChange }/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="composer">Composer</Form.Label>
                    <Form.Control className="w-50" placeholder="Composer Name" value={song.composer} name="composer" id="composer" onChange={ handleChange }/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="lyricist">Lyricist</Form.Label>
                    <Form.Control className="w-50" placeholder="Song Lyrics" value={song.lyricist} name="lyricist" id="lyricist" onChange={ handleChange }/>
                </Form.Group>

                {/* <Form.Group className="mb-3">
                    <Form.Label htmlFor="type">Type</Form.Label>
                    <Form.Control className="w-50" placeholder="Type of Song" value={song.type} name="type" id="type" onChange={ handleChange }/>
                </Form.Group> */}


                <Form.Group className="mb-3">
                    <Form.Label htmlFor="source">Source</Form.Label>
                    <Form.Control className="w-50" placeholder="Type of Song" value={song.source} name="source" id="source" onChange={ handleChange }/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="lyrics">Lyrics</Form.Label>
                    <Form.Control value={song.lyrics} className="m-2" as="textarea" rows={5} placeholder="song lyrics"  name="lyrics" id="lyrics" onChange={ handleChange }/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="scorePDF">Score PDF</Form.Label>
                    <Form.Control 
                        className="w-50" 
                        type="file" 
                        encType="form-data"
                        value={fileName} 
                        name="scorePDF" 
                        id="scorePDF" 
                        onChange={ onChangeFile }/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="recordings">recordings</Form.Label>
                    <Form.Control className="w-50" multiple placeholder="recordings" value={song.recordings} type='text' name="recordings" id="recordings" onChange={ handleChange }/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="embedId">Embed Id from Youtube video</Form.Label>
                    <Form.Control className="w-50" placeholder="Embed an Id of video from youtube, seperated by , comma" value={song.embedId} name="embedId" id="embedId" onChange={ handleChange }/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
        </>

}

export default SongForm