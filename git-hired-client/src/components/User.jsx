import { useAuth0 } from '@auth0/auth0-react';
import ListGroup from 'react-bootstrap/ListGroup'
import Logout from './Logout';

const User = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <>
                <div className="custList">
                    <ListGroup variant="flush">
                        <img className="list-image" src={user.picture} alt={user.name} />
                        <ListGroup.Item><h5>{user.name}</h5></ListGroup.Item>
                        <ListGroup.Item>{user.email}</ListGroup.Item>
                        <Logout />
                    </ListGroup>
                </div>
            </>
        )
    )
};

export default User;