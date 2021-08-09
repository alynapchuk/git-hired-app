import React, { Component } from "react";
import JobList from "./JobList";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
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
                <Container>
                    <div className="header-bg-img">
                        <div className="header-inner">
                            <div className='headerText'>
                                <h1>Git the developer job you really want.</h1>
                                <h3>GitHired takes the long and drawn out days of searching for your perfect development
                                    career and does all the hard work for you.</h3></div>
                        </div>
                    </div>
                    <Row>
                        <Col sm={3}>

                            <ListGroup className="custList">
                                <ListGroup.Item><h5>Useful Links</h5></ListGroup.Item>
                                <ListGroup.Item action target='_blank' href="https://www.rasmussen.edu/degrees/technology/blog/what-does-software-developer-do/"><img className="list-image" src="https://www.rasmussen.edu/-/media/images/blogs/school-of-technology/2020/what-does-a-software-developer-do-s.jpg" alt='img' />What Does a Software Developer Do?</ListGroup.Item>
                                <ListGroup.Item action target='_blank' href="https://www.rasmussen.edu/degrees/technology/blog/signs-you-should-consider-becoming-software-developer/"><img className="list-image" src="https://www.rasmussen.edu/-/media/images/blogs/school-of-technology/2016/technology-8-signs-you-should-blog-s.jpg" alt='img' />8 Signs You Should Consider Becoming a Software Developer</ListGroup.Item>
                                <ListGroup.Item action target='_blank' href="https://betterprogramming.pub/why-software-developers-werent-meant-to-work-in-offices-2177421d5fce"><img className="list-image" src="https://miro.medium.com/max/700/0*N1kQMgpveeSsFZYG" alt='img' />Software Developers Weren't Meant To Work in Offices</ListGroup.Item>
                            </ListGroup>
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

export default Home;