import React, { useState, useEffect } from 'react';
import Spotify from '../../../models/Spotify';

const Shows = (props) => {
    useEffect(() => {
        (async () => {
            const shows = await Spotify.getUserShows();
            console.log(shows);
        })();
    }, [])

    return (
        <div>Shows</div>
    );
}

export default Shows;