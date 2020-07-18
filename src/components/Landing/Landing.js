import React from 'react';
import Auth from '../../controllers/Auth';

function Landing(props) {
    return (
        <button onClick={Auth.authorize}>Login</button>
    );
}

export default Landing;