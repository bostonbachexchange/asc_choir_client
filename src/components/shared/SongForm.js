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
                            <Form.Control placeholder="Composer's name" value={song.composer} name="composer" id="composer" onChange={ handleChange }/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="lyricist">Lyricist</Form.Label>
                            <Form.Control placeholder="Writer of lyrics" value={song.lyricist} name="lyricist" id="lyricist" onChange={ handleChange } style={{ whiteSpace: 'pre' }}/>
                        </Form.Group>

                    {/* <Form.Group className="mb-3">
                        <Form.Label htmlFor="type">Type</Form.Label>
                        <Form.Control className="w-50" placeholder="Type of Song" value={song.type} name="type" id="type" onChange={ handleChange }/>
                    </Form.Group> */}

                        {/* <Form.Group className="mb-3">
                            <Form.Label htmlFor="source">Source</Form.Label>
                            <Form.Control placeholder="Type of Song" value={song.source} name="source" id="source" onChange={ handleChange }/>
                        </Form.Group> */}
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="source">Source</Form.Label>
                        <Form.Control
                        as="select"
                        value={song.source}
                        name="source"
                        id="source"
                        onChange={handleChange}
                        >
                        <option value="Singing The Living Tradition">Singing the Living Tradition</option>
                        <option value="Singing The Journey">Singing the Journey</option>
                        <option value="Choral Responses">Choral Responses</option>
                        <option value="Other">Other</option>
                        </Form.Control>
                    </Form.Group>

                    {song.source === 'Other' && (
                        <Form.Group className="mb-3">
                        <Form.Label htmlFor="otherSource">Other Source Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Type of Song"
                            value={song.otherSource}
                            name="otherSource"
                            id="otherSource"
                            onChange={handleChange}
                        />
                        </Form.Group>)}

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="lyrics">Lyrics</Form.Label>
                            <Form.Control 
                                value={song.lyrics} 
                                className="m-2" 
                                as="textarea" 
                                rows={5} 
                                placeholder="Lyrics line one&#10;Lyrics line two&#10;Lyrics line three etc"  
                                name="lyrics" 
                                id="lyrics" 
                                style={{ whiteSpace: 'pre'}}
                                onChange={ handleChange }/>
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

                        {/* <Form.Group className="mb-3">
                            <Form.Label htmlFor="recordings">recordings</Form.Label>
                            <Form.Control multiple placeholder="recordings" value={song.recordings} type='text' name="recordings" id="recordings" onChange={ handleChange }/>
                        </Form.Group> */}

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="embedId">Embed Id from Youtube video </Form.Label>
                            <Form.Text> Embed an Id of one or more videos from youtube, seperated by , comma</Form.Text>
                            <Form.Control placeholder="0HCBH336_n.w,   qb8XlLx7qp0,    jKMKzaiB2Yw" value={song.embedId} name="embedId" id="embedId" onChange={ handleChange }/>
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