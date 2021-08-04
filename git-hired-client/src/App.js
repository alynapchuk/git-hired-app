import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import SearchJobs from './components/SearchJobs';
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/searchjobs'>Search</Link>
                </nav>
            </div>
            <div>
                <img src='images/githiredlogo.png' alt='GIThired' />
            </div>
            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route path='/searchjobs'><SearchJobs /></Route>
            </Switch>
        </Router>
    )
}

export default App;