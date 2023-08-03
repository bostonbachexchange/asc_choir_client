import Button from 'react-bootstrap/Button';
// import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SongForm = (props) => {
    const { song, fileName, handleChange, handleSubmit, onChangeFile } = props

    return <>
            <Form className='playFont bg-light p-2' onSubmit={handleSubmit} name="uploaded_file">
                <Form.Label as='h1' className='text-center'>Add Music to Database</Form.Label>
                <hr></hr>
                <Row className="justify-content-center">
                    <Col sm={6}>
                        <Form.Group className="mb-3" >
                            <Form.Label column sm="2" htmlFor="title">Title of Piece</Form.Label>
                                <Form.Control placeholder="Title of the piece" value={song.title} name="title" id="title" onChange={ handleChange }/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="hymnNumber">Hymn Number </Form.Label>
                            <Form.Text> If no hymn number leave blank</Form.Text>
                            <Form.Control placeholder="1050" value={song.hymnNumber} name="hymnNumber" id="hymnNumber" onChange={ handleChange }/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="composer">Composer</Form.Label>
                            <Form.Control placeholder="Composer Name" value={song.composer} name="composer" id="composer" onChange={ handleChange }/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="lyricist">Lyricist</Form.Label>
                            {/* <br></br>
                            <Form.Text>Insert a vericle bar "|" </Form.Text>
                            <br></br>
                            <Form.Text>| to move lyrics to a new line </Form.Text> */}
                            <Form.Control placeholder="Song Lyrics" value={song.lyricist} name="lyricist" id="lyricist" onChange={ handleChange } style={{ whiteSpace: 'pre' }}/>

                        </Form.Group>

                    {/* <Form.Group className="mb-3">
                        <Form.Label htmlFor="type">Type</Form.Label>
                        <Form.Control className="w-50" placeholder="Type of Song" value={song.type} name="type" id="type" onChange={ handleChange }/>
                    </Form.Group> */}

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="source">Source</Form.Label>
                            <Form.Control placeholder="Type of Song" value={song.source} name="source" id="source" onChange={ handleChange }/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="lyrics">Lyrics</Form.Label>
                            <Form.Control value={song.lyrics} className="m-2" as="textarea" rows={5} placeholder="song lyrics"  name="lyrics" id="lyrics" onChange={ handleChange }/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="scorePDF">Score PDF</Form.Label>
                            <Form.Control 
                                type="file" 
                                encType="form-data"
                                value={fileName} 
                                name="scorePDF" 
                                id="scorePDF" 
                                onChange={ onChangeFile }/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="recordings">recordings</Form.Label>
                            <Form.Control multiple placeholder="recordings" value={song.recordings} type='text' name="recordings" id="recordings" onChange={ handleChange }/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="embedId">Embed Id from Youtube video</Form.Label>
                            <Form.Control placeholder="Embed an Id of video from youtube, seperated by , comma" value={song.embedId} name="embedId" id="embedId" onChange={ handleChange }/>
                        </Form.Group>
                    
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>

}

export default SongForm