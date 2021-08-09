import React, { Component } from 'react';
import JobList from './JobList';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/esm/Row';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

class SearchJobs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchKeyword: '',
            searchLocation: '',
            searchRemote: '',
            jobs: []
        }
    };

    handleKeyChange = (e) => {
        this.setState({
            searchKeyword: e.target.value,
        })
    };

    handleLocationChange = (e) => {
        this.setState({
            searchLocation: e.target.value,
        })
    };

    handleRemoteChange = () => {
        this.setState({
            searchRemote: true
        })
    };

    handleSumbit = (e) => {
        e.preventDefault();
        this.fetchJobs();
    };


    fetchJobs = async () => {
        const response = await fetch(`http://localhost:9000/proxy?url=https://findwork.dev/api/jobs/?search=${this.state.searchKeyword}&source=&location=${this.state.searchLocation}&remote=${this.state.searchRemote}&company_num_employees=&employment_type=&order_by=`)
            .then(response => response.json());

        this.setState({
            jobs: response.results
        })
    };

    render() {
        return (
            <>
                <Container>
                    <div className="header-bg-img">
                        <div className="header-inner">
                            <div className='headerText'>
                                <h1>Search Current Job Listings</h1>
                                <h3>Filter through job postings by keywords (such as python, react, chai, etc.), location, and/or remote work to narrow down and simplify the job hunt.</h3></div>
                        </div>
                    </div>
                    <Row>
                        <Col sm={3}>
                            <Form onSubmit={this.handleSumbit}>

                                <ListGroup className="custList" variant="">
                                    <ListGroup.Item><h5>Apply Filters</h5></ListGroup.Item>

                                    <ListGroup.Item>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="Search by Keywords" onChange={this.handleKeyChange} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control type="text" placeholder="Search by Location" onChange={this.handleLocationChange} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" name="remote" onChange={this.handleRemoteChange} label="Remote Work Only" />
                                        </Form.Group>
                                    </ListGroup.Item>
                                    <Button className="custButton" variant="primary" type="submit">
                                        Search
                                    </Button>

                                </ListGroup>
                            </Form>
                        </Col>

                        <Col className="custCol">
                            <JobList jobs={this.state.jobs} />
                        </Col>
                    </Row>
                </Container>

            </>
        )
    };

}

export default SearchJobs;