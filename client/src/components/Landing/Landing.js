import React from 'react';
import auth from '../../auth/auth';

function Landing(props) {
    return (
        <button onClick={auth.logIn}>Login</button>
    );
}

export default Landing;