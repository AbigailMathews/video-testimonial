import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { ReactMic } from 'react-mic';
import Question from './Question';

const Audio = (props) => {
  return (
    <Container>
      <div className="row">
        <div className="col">
          <Question />
        </div>
      </div>
      <div className="row justify-content-center mb-2">
        <div className="col-12 col-md-7 galaxy">
          <ReactMic
            record={props.capturing}
            className="sound-wave media-width"
            onStop={() => console.log('stopped recording')}
            onData={(data) => props.handleDataAvailable}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-4">
          {props.capturing ? (
            <Link to="/finish">
              <Button
                className="btn-block media-btn p-0 p-md-2 stop-btn"
                onClick={props.handleStopCapture}
              >
                <div className="d-flex justify-content-center">
                  <i className="bi bi-stop-circle-fill stop-icon"></i>
                  <p className="btn-text align-self-center">Stop Recording</p>
                </div>
              </Button>
            </Link>
          ) : (
            <Button
              className="btn-block media-btn p-0"
              onClick={props.handleStartCapture}
            >
              <div className="d-flex justify-content-center">
                <i className="bi bi-record2 record-icon"></i>
                <p className="btn-text align-self-center">Start Recording</p>
              </div>
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Audio;
