import React from 'react';
import { Card } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';
import apiUrl from '../../apiConfig'

const AudioRecordings = (props) => {
  const { audioRecordings } = props;
console.log("audioRecordings props in AudioRecordings: ", audioRecordings)
  return (
    <>
      <strong>Recordings:</strong>
      {audioRecordings.map((recording, index) => (
        <Card key={index} className="m-2">
          <Card.Header>
            <strong>{recording.name} {index + 1}</strong>
          </Card.Header>
          <Card.Body className="text-center">
            <ReactAudioPlayer src={`${apiUrl}/${recording.audio}`} controls />
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default AudioRecordings;
