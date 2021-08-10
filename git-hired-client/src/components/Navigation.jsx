import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

import Home from './Home';
import SearchJobs from './SearchJobs';
import Profile from './Profile';


const Navigation = () => {

    return (
        <Router>

            <Navbar collapseOnSelect expand="lg" bg="white">
                <Container>
                    <Nav.Link href="/"><img className='gitHiredLogo' width='200px' src='githiredlogo.png' alt='GIThired' /></Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/searchjobs">Search</Nav.Link>
                            <NavDropdown title="Resources" id="basic-nav-dropdown">
                                <NavDropdown.Item target='_blank' href="https://github.com/alynapchuk/git-hired-app">GitHub</NavDropdown.Item>
                                <NavDropdown.Item target='_blank' href="https://www.alynapchuk.com/">Portfolio</NavDropdown.Item>
                                <NavDropdown.Item target='_blank' href="https://www.linkedin.com/in/alynapchuk/">LinkedIn</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/profile">Favorites</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route path='/searchjobs'><SearchJobs /></Route>
                <Route path='/profile'><Profile /></Route>
            </Switch>
        </Router>
    )
};

export default Navigation;