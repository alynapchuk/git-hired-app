import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Job(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <Card className='text-center custCard'>

            <Card.Header as="h5">{props.role}</Card.Header>

            <Card.Body>

                <Card.Subtitle className="mb-2 text-muted">{props.company}</Card.Subtitle>

                <Button className='custButton' target='_blank' href={props.url} variant="none">Apply</Button>

                <Button className='custButton' variant="none" onClick={handleShow}>
                    Learn More
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{props.role}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{props.text}</Modal.Body>
                </Modal>

                <Button className='custButton' href='#' variant="none">Favorite</Button>

            </Card.Body>
        </Card>
    )
}

export default Job;