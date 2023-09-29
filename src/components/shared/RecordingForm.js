import React from "react";
import { Form, Button } from 'react-bootstrap'

const RecordingForm = (props) => {
    const { song, recording, handleChange, handleFileChange, handleSubmit, heading } = props;
    
    return (
        <>
            <Form onSubmit={handleSubmit} className="m-3">
            
                <Form.Group className="mb-2">
                    <Form.Label htmlFor="name">Recording Name:</Form.Label>
                    <Form.Control
                        className="w-50"
                        type='text'
                        placeholder="Enter the name of the recording"
                        name="name"
                        id="name"
                        value={recording.name}
                        onChange={handleChange}
                    />
                </Form.Group>
                                
                <Form.Group className="mb-2">
                    <Form.Label htmlFor="audio">Audio File:</Form.Label>
                    <Form.Control
                        type="file"
                        name="audio"
                        id="audio"
                        onChange={handleFileChange}
                    />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default RecordingForm;
