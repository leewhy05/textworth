import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from '../components/Form';

const Buttonn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
      const formSubmitted = localStorage.getItem('formSubmitted');

      if (formSubmitted === 'true') {
          setShow(false); // Close the modal if the form was successfully submitted
          localStorage.removeItem('formSubmitted'); // Clear the flag after closing the modal
      }
  }, []);

  const closeModal = (isSubmitted) => {
      setShow(false); // Close the modal
      if (isSubmitted) {
          localStorage.setItem('formSubmitted', 'true'); // Set the flag for successful form submission
      }
  };

  return (
      <div className='bott'>
          <Button variant="danger" onClick={() => setShow(true)} className='rounded-circle fw-bold'>
              Book <br /> A <br /> Session
          </Button>

          <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
          >
              <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                      Book a Session with Texthworth PLC
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Form closeModal={closeModal} />
              </Modal.Body>
          </Modal>
      </div>
  );
};

export default Buttonn;