import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Permissions(props) {
  const [show, setShow] = useState(false);

  const location = useLocation();
  const setParticipantId = props.setParticipantId;

  useEffect(() => {
    const id = new URLSearchParams(location.search).get('id');
    if (id) {
      setParticipantId(id);
      console.log(id);
    }
  }, [location, setParticipantId]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Container className="d-flex text-center vertical-center vh-50">
      <div className="my-auto align-items-center">
        <div className="row">
          <div className="col">
            <h1 className="permission-title mt-5">
              Sharing your feedback will help America Talks reach more people
            </h1>
            <p className="permission-body mt-4 mt-md-5">
              We'd like to use your video or audio feedback to understand how we
              can improve the America Talks series, and how the program is
              having an impact on participants. Your answers will be shared with
              America Talks program staff, and may also be used to promote
              future events.
            </p>
            <button className="link" onClick={handleShow}>
              Read more
            </button>
            <div className="row justify-content-center mt-4">
              <div className="col-10 col-md-4 mt-md-3">
                <Link to="/start">
                  <Button
                    variant="primary"
                    className="btn-block button"
                    onClick={() => props.setTermsAcceptance(true)}
                  >
                    Accept
                  </Button>
                </Link>
              </div>
              <div className="col-6 col-md-2 mt-3">
                <a href="https://americatalks.us/">
                  <button className="link decline">Decline</button>
                </a>
              </div>
            </div>
            <Modal
              animation={false}
              className="modal"
              size="lg"
              centered
              show={show}
              onHide={handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title className="modal-title">
                  Detailed Terms and Privacy Policy
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Permissions;
