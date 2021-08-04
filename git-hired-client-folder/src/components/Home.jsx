import React, { Component } from "react";
import JobList from "./JobList";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        }
    };

    fetchJobs = async () => {
        const response = await fetch(`http://localhost:9000/proxy?url=https://findwork.dev/api/jobs/`)
            .then(response => response.json());

        this.setState({
            jobs: response.results
        })
    };

    componentDidMount() {
        this.fetchJobs();
    }

    render() {
        return (
            <>

                <><h1>GitHired</h1>
                    <h2>Git the developer job you really want.</h2></>

                <JobList jobs={this.state.jobs} />
            </>
        )
    };

}

export default Home;