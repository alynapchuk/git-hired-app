import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import SearchJobs from './components/SearchJobs';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const App = () => {
    return (
        <Router>

            <Nav justify variant="tabs">
                <Nav.Item><LinkContainer to='/home'>
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer></Nav.Item>

                <Nav.Item><LinkContainer to='/searchjobs'>
                    <Nav.Link>Search</Nav.Link>
                </LinkContainer></Nav.Item>
            </Nav>


            <div className="header-bg-img">
                <div className="header-inner">
                    <img src='images/githiredlogo.png' alt='GIThired' />
                </div>
            </div>


            <Switch>
                <Route exact path='/home'><Home /></Route>
                <Route path='/searchjobs'><SearchJobs /></Route>
            </Switch>
        </Router>
    )
}

export default App;