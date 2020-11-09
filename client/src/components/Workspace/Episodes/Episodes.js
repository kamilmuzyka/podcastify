import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../contexts/UserContextProvider';
import user from '../../../interfaces/user';
import spotify from '../../../interfaces/spotify';
import EpisodesList from './EpisodesList/EpisodesList';

const Title = styled.h2`
    margin-bottom: 1em;
    padding-bottom: 0.5em;
    font-size: 2em;
    font-weight: 700;
`;

function Episodes(props) {
    const [details, updateDetails] = useState({});
    const { userLibrary } = useContext(UserContext);

    useEffect(() => {
        updateDetails(userLibrary);
    }, [userLibrary]);

    return (
        <>
            <Title>Liked Episodes</Title>
            <EpisodesList details={details}/>
        </>
    );
}

export default Episodes;