import React from 'react';
import Container from 'react-bootstrap/Container';

function Question() {
  return (
    <Container className="p-md-3 mt-4 mt-md-5">
      <p className="question text-center m-0 m-md-2">Question</p>
      <p className="prompt mb-3 mb-md-0 text-center">
        <span className="bold">In around 60 seconds</span>, what are your
        feelings after this conversation? Is there anything you'll do
        differently now after having this discussion?
      </p>
    </Container>
  );
}

export default Question;
