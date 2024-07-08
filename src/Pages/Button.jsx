import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from '../components/Form';

const Buttonn = () => {
    const [show, setShow] = useState(false);

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
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form/>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Buttonn