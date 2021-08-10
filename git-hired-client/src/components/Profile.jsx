import Login from './Login';
import User from './User';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAuth0 } from '@auth0/auth0-react';


function Profile() {

    const { isLoading } = useAuth0();

    if (isLoading) return <div>Loading...</div>

    return (
        <>

            <Container>
                <div className="header-bg-img">
                    <div className="header-inner">
                        <div className='headerText'>
                            <h1>Favorited Job Listings</h1>
                            <h3>Keep track of all the jobs which you have applied to or save any favorites you may be interested in, all in one place.</h3></div>
                    </div>
                </div>
                <Row>
                    <Col sm={3}>
                        <User />
                        <Login />
                    </Col>

                    <Col>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Profile;
