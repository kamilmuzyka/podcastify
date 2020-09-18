import React, { useState, useEffect } from 'react';
import Spotify from '../../../models/Spotify';
import { SEARCH_TYPES } from '../../../constants';
import Tiles from '../Tiles/Tiles';
import Tile from '../Tiles/Tile/Tile';

const Shows = (props) => {
    const [shows, updateShows] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await Spotify.getUserShows();
            updateShows(
                response.items
                    .map(item => item.show)
                    .reverse()
            );
        })();
    }, [])

    console.log(shows);
    return (
        (shows.length > 0) ?
            <Tiles title="Followed Shows">
                { shows.map(show => {
                    return <Tile
                        key={show.id}
                        id={show.id}
                        title={show.name}
                        description={show.description}
                        image={show.images[1].url}
                        type={SEARCH_TYPES.show} />
                })}
            </Tiles>
        : null
    );
}

export default Shows;