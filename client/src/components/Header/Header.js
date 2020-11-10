import React, { useState, useContext, useEffect }  from 'react';
import styled from 'styled-components';
import { UserContext } from '../../contexts/UserContextProvider';
import Profile from './Profile/Profile';
import Search from './Search/Search';
import MenuButton from '../../UI/MenuButton/MenuButton';
import spotify from '../../interfaces/spotify';
import user from '../../interfaces/user';
import DefaultImage from '../../assets/img/profile.png';

const Element = styled.header`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.5em 2em;
    background-color: ${({ theme }) => theme.colors.tertiary};

    & > * {
        margin-top: 2em;
    }

    & > *:first-child {
        margin-top: 0;
    }

    @media (min-width: 500px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        & > * {
            margin-top: 0;
        }
    }
`;

const StyledMenuButton = styled(MenuButton)`
    top: 0;
    right: 2em;

    @media (min-width: 500px) {
        top: 50%;
        transform: translateY(-50%);
    }
`;

function Header(props) {
    const [profileURL, profileUpdateURL] = useState('');
    const [profileName, profileUpdateName] = useState('');
    const [profileImage, profileUpdateImage] = useState('');
    const [imageLoading, updateImageLoading] = useState(true);
    const { userId, userLibraryRefresher, updateUserId, updateUserLibrary } = useContext(UserContext);

    useEffect(() => {
        (async () => {
            try {
                const profile = await spotify.getUserProfile();
                if (!profile) {
                    return;
                }
                profileUpdateURL(profile.external_urls.spotify);
                profileUpdateName(profile.display_name);
                profileUpdateImage(profile.images[0]?.url || DefaultImage);
                updateImageLoading(false);
                updateUserId(profile.id);
            } catch(err) {
                throw new Error(err);
            }
        })();
    }, []);

    useEffect(() => {
        if (userId) {
            (async () => {
                try {
                    const { episodes } = await user.getEpisodes(userId);
                    if (episodes.length === 0) {
                        updateUserLibrary([]);
                        return;
                    }
                    const ids = episodes.map(episode => episode.id);
                    const userEpisodes = await spotify.getUserEpisodes(ids);
                    updateUserLibrary({
                        episodes: userEpisodes.episodes
                    });
                } catch (err) {
                    throw new Error(err);
                }
            })();
        }
    }, [userId, userLibraryRefresher]);

    return (
        <Element>
            <Profile
                external={profileURL}
                name={profileName}
                image={profileImage}
                loading={imageLoading.toString()}/>
            <Search/>
            <StyledMenuButton/>
        </Element>
    );
}

export default Header;