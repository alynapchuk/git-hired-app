import React, { Component } from 'react';
import JobList from './JobList';

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
                <h2>Search Current Job Listings</h2>

                <form onSubmit={this.handleSumbit}>

                    <input type='text' placeholder='Search by Keywords' onChange={this.handleKeyChange} />

                    <input type='text' placeholder='Search by Location' onChange={this.handleLocationChange} />

                    <br />
                    <input type="checkbox" name="remote" onChange={this.handleRemoteChange} /><label for="remote">Remote?</label>
                    <br />
                    <button type='submit'>Submit</button>
                </form>
                <JobList jobs={this.state.jobs} />
            </>
        )
    };

}

export default SearchJobs;