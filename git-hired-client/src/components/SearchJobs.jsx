import React, { Component } from 'react';
import JobList from './JobList';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
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
                <div className="header-bg-img">
                    <div className="header-inner">
                        <img className='gitHiredLogo' src='githiredlogo.png' alt='GIThired' />
                        <h1 className='headerText'>Search Current Job Listings</h1>
                    </div>
                </div>

                <Form onSubmit={this.handleSumbit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Search by Keywords" onChange={this.handleKeyChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Search by Location" onChange={this.handleLocationChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" name="remote" onChange={this.handleRemoteChange} label="Remote Work Only" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Search
                    </Button>

                </Form>

                <JobList jobs={this.state.jobs} />
            </>
        )
    };

}

export default SearchJobs;