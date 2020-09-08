import React from 'react';
import Accordion from '../../../../../../UI/Accordion/Accordion';
import LikeIcon from '../../../../../../UI/LikeIcon/LikeIcon';

const ShowEpisode = ({ name, description, releaseDate, duration, source }) => {
    return (
        <div>
            <h3>{name}</h3>
            <Accordion>{description}</Accordion>
            <time datetime={releaseDate}>{releaseDate}</time> • {duration}
            <a href={source}>Listen on Spotify</a>
        </div>
    );
}

export default ShowEpisode;