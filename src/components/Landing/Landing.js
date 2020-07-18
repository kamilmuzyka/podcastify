import React from 'react';
import Spotify from '../../models/Spotify';

function Landing(props) {
    return (
        <button onClick={Spotify.authorize}>Login</button>
    );
}

export default Landing;