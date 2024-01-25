import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function CustomModal({ isOpen, title, image, content }) {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    console.log(content);
    setIsShow(isOpen);
  }, [isOpen]);

  const onCloseModal = () => {
    setIsShow(false);
  };

  return (
    <Modal
      show={isShow}
      onHide={onCloseModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row image-row">
            <img className="card-img-top card-img" src={image} alt="Card_cap" />
          </div>
          <div className="row mt-3 p-2">
            <p>{content}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={() => {}}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
