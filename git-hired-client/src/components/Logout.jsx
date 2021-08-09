import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

const Logout = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <Button className="custButton" onClick={() => logout()}>Log Out</Button>
        )
    )
};

export default Logout;