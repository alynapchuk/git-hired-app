import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

import Home from './components/Home';
import SearchJobs from './components/SearchJobs';
import Profile from './components/Profile'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const App = () => {
    return (
        <Router>
            <Navbar fixed="bottom" className="custNavbar">

                <LinkContainer to='/'>
                    <Navbar.Brand><img src="/house-door.svg" /></Navbar.Brand>
                </LinkContainer>

                <LinkContainer to='/searchjobs'>
                    <Navbar.Brand><img src="/search.svg" /></Navbar.Brand>
                </LinkContainer>

                <LinkContainer to='/resources'>
                    <Navbar.Brand><img src="/book.svg" /></Navbar.Brand>
                </LinkContainer>

                <LinkContainer to='/profile'>
                    <Navbar.Brand><img src="/user.svg" /></Navbar.Brand>
                </LinkContainer>

            </Navbar>

            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route path='/searchjobs'><SearchJobs /></Route>
                <Route path='/profile'><Profile /></Route>
            </Switch>
        </Router>
    )
}

export default App;