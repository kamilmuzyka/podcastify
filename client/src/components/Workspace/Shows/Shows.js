import React, { useState, useEffect } from 'react';
import spotify from '../../../interfaces/spotify';
import { TYPES } from '../../../constants/types';
import Tiles from '../Tiles/Tiles';
import Tile from '../Tiles/Tile/Tile';

const Shows = (props) => {
    const [shows, updateShows] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await spotify.getUserShows();
            updateShows(
                response.items
                    .map(item => item.show)
                    .reverse()
            );
        })();
    }, []);

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
                        type={TYPES.show} />
                })}
            </Tiles>
        : null
    );
}

export default Shows;