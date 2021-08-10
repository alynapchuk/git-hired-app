import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Job(props) {
    return (

        <Card className='text-center custCard'>
            <Card.Header as="h5">{props.role}</Card.Header>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">{props.company}</Card.Subtitle>
                <Button className='custButton' target='_blank' href={props.url} variant="primary">Apply</Button>
                <Button className='custButton' href='#' variant="primary">Learn More</Button>
                <Button className='custButton' href='#' variant="primary">Favorite</Button>
            </Card.Body>
        </Card>
    )
}

export default Job;