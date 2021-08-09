import Login from './Login';
import User from './User';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Profile() {

    return (
        <>

            <Container>
                <div className="header-bg-img">
                    <div className="header-inner">
                        <div className='headerText'>
                            <h1>Favorited Job Listings</h1>
                            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, nulla quae. Magnam autem repudiandae, in minus voluptatem atque placeat sequi.</h3></div>
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
