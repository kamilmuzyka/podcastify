import React, { useState, useEffect } from 'react';
import spotify from '../../../interfaces/spotify';
import { TYPES } from '../../../constants/types';
import Title from '../../../UI/Title/Title';
import Tiles from '../Tiles/Tiles';
import Tile from '../Tiles/Tile/Tile';
import Message from '../../../UI/Message/Message';
import WorkspaceLoading from '../WorkspaceLoading/WorkspaceLoading';

const Shows = (props) => {
    const [shows, updateShows] = useState([]);
    const [isLoading, updateIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await spotify.getUserShows();
            if (response.items) {
                updateShows(
                    response.items
                        .map(item => item.show)
                        .reverse()
                );
                updateIsLoading(false);
            }
        })();
    }, []);

    return (
        <>
            <Title>Followed Shows</Title>
            { (shows.length > 0) ?
                <Tiles>
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
                :
                <Message>
                    Your shows library is empty! Browse and follow shows to see them here.
                </Message>
            }
            <WorkspaceLoading loading={isLoading.toString()}/>
        </>
    );
}

export default Shows;