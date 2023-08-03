import Button from 'react-bootstrap/Button';
// import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ServiceForm = (props) => {
    const { newService, fileName, handleChange, handleSubmit, onChangeFile } = props
    return <>
        <Form className='playFont bg-light p-1' onSubmit={handleSubmit} name="uploaded_file">
            <Form.Label as='h1' className='text-center'>New Sunday Service</Form.Label>
            <hr></hr>
            <Row className="justify-content-center">
                <Col sm={6}>
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="date">Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={newService.date ? new Date(newService.date).toISOString().split("T")[0] : ""}
                                name="date"
                                id="date"
                                onChange={handleChange}
                                />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="prelude">Minister</Form.Label>
                            <Form.Control placeholder="Minister's Name" value={newService.minister} name="minister" id="minister" onChange={ handleChange }/>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="theme">Theme/Topic</Form.Label>
                            <Form.Control placeholder="TBA" value={newService.theme} name="theme" id="theme" onChange={ handleChange }/>
                    </Form.Group>

                    <br></br>
                    <h3 className='text-center'>Prelude</h3>
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="prelude">Prelude</Form.Label>
                            <Form.Control placeholder="Prelude" value={newService.prelude} name="prelude" id="prelude" onChange={ handleChange }/>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label  htmlFor="preludePerformer">Prelude Performer</Form.Label>
                            <Form.Control placeholder="Prelude Performer" value={newService.preludePerformer} name="preludePerformer" id="preludePerformer" onChange={ handleChange }/>
                    </Form.Group>
                    <br></br>
                    <h3 className='text-center'>Opening Hymn Title/Name</h3>
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="openingHymn">Opening Hymn</Form.Label>
                            <Form.Control  placeholder="Opening Hymn" value={newService.openingHymn} name="openingHymn" id="openingHymn" onChange={ handleChange }/>
                    </Form.Group>  

                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="offertoryPerformer">Opening Hymn Performer</Form.Label>
                            <Form.Control placeholder="Opening Hymn Performer" value={newService.openingHymnPerformer} name="openingHymnPerformer" id="openingHymnPerformer" onChange={ handleChange }/>
                    </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="closingHymnNumber">Opening Hymn Number #</Form.Label>
                <Form.Control placeholder="Opening Hymn Number" value={newService.openingHymnNumber} name="openingHymnNumber" id="openingHymnNumber" onChange={ handleChange }/>
            </Form.Group>  
            <br></br>
            <h3 className='text-center'>Chalice</h3>
            <Form.Group className="mb-3" >
                <Form.Label htmlFor="chaliceSong">Chalice Song</Form.Label>
                    <Form.Control placeholder="Chalice Song" value={newService.chaliceSong} name="chaliceSong" id="chaliceSong" onChange={ handleChange }/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label htmlFor="chaliceSongPerformer">Chalice Song Performer</Form.Label>
                    <Form.Control placeholder="Chalice Song Performer" value={newService.chaliceSongPerformer} name="chaliceSongPerformer" id="chaliceSongPerformer" onChange={ handleChange }/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="chaliceSongNumber">Chalice Song Number #</Form.Label>
                <Form.Control placeholder="Chalice Song Number" value={newService.chaliceSongNumber} name="chaliceSongNumber" id="chaliceSongNumber" onChange={ handleChange }/>
            </Form.Group>
            <br></br>
            <h3 className='text-center'>Centering Hymn Title/Name</h3>
            <Form.Group className="mb-3" >
                <Form.Label htmlFor="centeringHymn">Centering Hymn</Form.Label>
                    <Form.Control placeholder="Centering Hymn" value={newService.centeringHymn} name="centeringHymn" id="centeringHymn" onChange={ handleChange }/>
            </Form.Group>  

            <Form.Group className="mb-3" >
                <Form.Label htmlFor="centeringPerformer">Centering Performer</Form.Label>
                    <Form.Control placeholder="Centering Hymn Performer" value={newService.centeringHymnPerformer} name="centeringHymnPerformer" id="centeringHymnPerformer" onChange={ handleChange }/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="hymnNumber">Centering Hymn Number #</Form.Label>
                <Form.Control placeholder="Hymn Number" value={newService.centeringHymnNumber} name="centeringHymnNumber" id="centeringHymnNumber" onChange={ handleChange }/>
            </Form.Group>    
            <br></br>
            <h3 className='text-center'>Offertory Name/Title</h3>
            <Form.Group className="mb-3" >
                <Form.Label htmlFor="offertory">Offertory</Form.Label>
                    <Form.Control placeholder="Offertory" value={newService.offertory} name="offertory" id="offertory" onChange={ handleChange }/>
            </Form.Group>  

            <Form.Group className="mb-3" >
                <Form.Label htmlFor="offertoryPerformer">Offertory Performer</Form.Label>
                    <Form.Control placeholder="Offertory Performer" value={newService.offertoryPerformer} name="offertoryPerformer" id="offertoryPerformer" onChange={ handleChange }/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="offertoryNumber">Offertory Hymn Number</Form.Label>
                <Form.Control placeholder="Hymn Number" value={newService.offertoryNumber} name="offertoryNumber" id="offertoryNumber" onChange={ handleChange }/>
            </Form.Group>    
            <br></br>
            <h3 className='text-center'>Closing Hymn Name/Title</h3>
            <Form.Group className="mb-3" >
                <Form.Label htmlFor="closingHymn">Closing Hymn</Form.Label>
                    <Form.Control placeholder="Closing Hymn" value={newService.closingHymn} name="closingHymn" id="closingHymn" onChange={ handleChange }/>
            </Form.Group>  

            <Form.Group className="mb-3" >
                <Form.Label htmlFor="offertoryPerformer">Closing Hymn Performer</Form.Label>
                    <Form.Control placeholder="Closing Hymn Performer" value={newService.closingHymnPerformer} name="closingHymnPerformer" id="closingHymnPerformer" onChange={ handleChange }/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="closingHymnNumber">Closing Hymn Number #</Form.Label>
                <Form.Control className="w-50" placeholder="Closing Hymn Number" value={newService.closingHymnNumber} name="closingHymnNumber" id="closingHymnNumber" onChange={ handleChange }/>
            </Form.Group>    
            <br></br>
            <h3 className='text-center'>Postlude Name/Title</h3>
            <Form.Group className="mb-3" >
                <Form.Label htmlFor="postlude">Postlude</Form.Label>
                    <Form.Control placeholder="Postlude" value={newService.postlude} name="postlude" id="postlude" onChange={ handleChange }/>
            </Form.Group>  

            <Form.Group className="mb-3" >
                <Form.Label htmlFor="postludePerformer">Postlude Performer</Form.Label>
                    <Form.Control placeholder="Postlude Performer" value={newService.postludePerformer} name="postludePerformer" id="postludePerformer" onChange={ handleChange }/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="postludeNumber">Postlude Hymn Number #</Form.Label>
                <Form.Control placeholder="Postlude Number" value={newService.postludeNumber} name="postludeNumber" id="postludeNumber" onChange={ handleChange }/>
            </Form.Group>    
            <h3 className='text-center'>Service Image</h3>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="image">Service Image</Form.Label>
                <Form.Control 
                    type="file" 
                    encType="form-data"
                    value={fileName} 
                    name="image" 
                    id="image" 
                    onChange={ onChangeFile }/>
            </Form.Group> 

            <div className='text-center'>
                <Button  variant="primary" type="submit">
                Submit
                </Button>
            </div>
                </Col>
            </Row>
            </Form>
        </>

}

export default ServiceForm