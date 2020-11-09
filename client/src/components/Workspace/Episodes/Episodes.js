import React, { useEffect, useContext } from 'react';
import { UserContext } from '../../../contexts/UserContextProvider';
import user from '../../../interfaces/user';
import spotify from '../../../interfaces/spotify';

function Episodes(props) {
    const { userId } = useContext(UserContext);

    useEffect(() => {
        if (userId) {
            (async () => {
                const { episodes } = await user.getEpisodes(userId);
                const ids = episodes.map(episode => episode.id);
                const userEpisodes = await spotify.getUserEpisodes(ids);
                console.log(userEpisodes);
            })();
        }
    }, [userId]);

    return (
        <div>Episodes</div>
    );
}

export default Episodes;