import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <Button className="custButton" onClick={() => loginWithRedirect()}>Log In</Button>
        )
    )
};

export default Login;