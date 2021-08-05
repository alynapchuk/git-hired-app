import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

import SearchJobs from './components/SearchJobs';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const App = () => {
    return (
        <Router>
            <Navbar fixed="bottom" className="custNavbar">

                <LinkContainer to='/home'>
                    <Navbar.Brand><img src="/house-door.svg" /></Navbar.Brand>
                </LinkContainer>

                <LinkContainer to='/searchjobs'>
                    <Navbar.Brand><img src="/search.svg" /></Navbar.Brand>
                </LinkContainer>

                <LinkContainer to='/resources'>
                    <Navbar.Brand><img src="/book.svg" /></Navbar.Brand>
                </LinkContainer>

                <LinkContainer to='/user'>
                    <Navbar.Brand><img src="/user.svg" /></Navbar.Brand>
                </LinkContainer>

            </Navbar>

            <Switch>
                <Route exact path='/home'><Home /></Route>
                <Route path='/searchjobs'><SearchJobs /></Route>
            </Switch>
        </Router>
    )
}

export default App;