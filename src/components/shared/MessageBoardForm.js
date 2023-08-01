import Button from 'react-bootstrap/Button';
import { Card, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const MessageBoardForm = (props) => {

    const { message, handleChange, handleSubmit, fileName, onChangeFile, heading} = props
    return <>
            <Container className='text-center playFont messageForm'  >
                <Card className='text-center'>
                    <Card.Header><h3 className='text-center'>{heading}</h3></Card.Header>
                    <Form  onSubmit={handleSubmit} className="m-3">
                            <h4>Title</h4>
                            <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2} htmlFor="title">Blog Title or Theme</Form.Label>
                            <Col sm={10}>
                                <Form.Control className="m-2" placeholder="Title of the Blog" name="title" value={message.title} id="title" onChange={ handleChange }/>
                            </Col>
                        </Form.Group> 
                        <h4>Contents</h4>
                        <Form.Group as={Row} className="mb-2">
                            <Form.Label  column sm={2} htmlFor="content">Blog Contents</Form.Label>
                            <Col sm={10}>
                                <Form.Control className="m-2" as='textarea' rows={4}placeholder="Blog contents" value={message.content} name="content" id="content" onChange={ handleChange }/>
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="image"><h4>Blog Image</h4></Form.Label>
                            <Form.Control 
                            type="file" 
                            encType="form-data"
                            value={fileName} 
                            name="image" 
                            id="image" 
                            onChange={ onChangeFile }/>
                            <p>Add a nice picture to set the tone!</p>
                        </Form.Group> 
                        {/* lets add videos and recordings */}
                        
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                    </Form>
                </Card>
            </Container>
        </>

}

export default MessageBoardForm