import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import AppLoader from "./loader/appLoader";

export default function CustomModal({ isOpen, title, image, content }) {
  const [isShow, setIsShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState(false);


  useEffect(() => {
    setIsShow(isOpen);
  }, [isOpen]);
 
  useEffect(() => {
   setSummary(content)
  }, [content, summary]);

  const onCloseModal = () => {
    setIsShow(false);
  };
  
  const onHandleSummarize = () => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:5000/bart")
      .then((response) => {
        const summarizeResponse = response.data.summary;

        setSummary(summarizeResponse);

          setLoading(false);
        })
        .catch((error) => setLoading(false));
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
      {!loading ?<Modal.Body>
        <div className="container">
          <div className="row image-row">
            <img className="card-img-top card-img" src={image} alt="Card_cap" />
          </div>
          <div className="row mt-3 p-2">
            <p>{summary}</p>
          </div>
        </div>
      </Modal.Body> : (<AppLoader />)}
      <Modal.Footer>
        <Button variant="secondary" onClick={onCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={onHandleSummarize}>
          Summarize
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
