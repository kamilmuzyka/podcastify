import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import Profile from './Profile/Profile';
import Search from './Search/Search';
import MenuButton from '../../UI/MenuButton/MenuButton';
import Spotify from '../../models/Spotify';
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

    useEffect(() => {
        (async () => {
            try {
                const profile = await Spotify.getUserProfile();
                if (!profile) {
                    return;
                }
                profileUpdateURL(profile.external_urls.spotify);
                profileUpdateName(profile.display_name);
                profileUpdateImage(profile.images[0].url || DefaultImage);
                updateImageLoading(false);
            } catch(err) {
                throw new Error(err);
            }
        })();
    }, []);

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