import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../contexts/UserContextProvider';
import Title from '../../../UI/Title/Title';
import EpisodesList from './EpisodesList/EpisodesList';
import Message from '../../../UI/Message/Message';
import WorkspaceLoading from '../WorkspaceLoading/WorkspaceLoading';

function Episodes(props) {
    const [details, updateDetails] = useState({});
    const { userLibrary } = useContext(UserContext);

    useEffect(() => {
        updateDetails(userLibrary);
    }, [userLibrary]);

    return (
        <>
            <Title>Liked Episodes</Title>
            { (details.episodes) ?
                (details.episodes.length !== 0) ?
                    <EpisodesList details={details}/>
                    :
                    <Message>
                        Your episodes library is empty! Browse and like episodes to see them here.
                    </Message>
                :
                <WorkspaceLoading loading={true}/>
            }
        </>
    );
}

export default Episodes;