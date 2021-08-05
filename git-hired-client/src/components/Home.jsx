import React, { Component } from "react";
import JobList from "./JobList";
import 'bootstrap/dist/css/bootstrap.min.css';

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
                <div className="header-bg-img">
                    <div className="header-inner">
                        <img className='gitHiredLogo' src='githiredlogo.png' alt='GIThired' />
                        <h1 className='headerText'>Git the developer job you really want.</h1>
                    </div>
                </div>

                <JobList jobs={this.state.jobs} />

            </>
        )
    };

}

export default Home;