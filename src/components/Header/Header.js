import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import Profile from './Profile/Profile';
import Search from './Search/Search';
import Spotify from '../../models/Spotify';
import DefaultImage from '../../assets/img/profile.png';


const Element = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.5em 2em;
    background-color: var(--dark);

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

function Header(props) {
    const [profileURL, profileUpdateURL] = useState();
    const [profileName, profileUpdateName] = useState();
    const [profileImage, profileUpdateImage] = useState();

    useEffect(() => {
        (async () => {
            const profile = await Spotify.getUserProfile();
            if(!profile) {
                return;
            }
            profileUpdateURL(profile.external_urls.spotify);
            profileUpdateName(profile.display_name);
            profileUpdateImage(profile.images[0] || DefaultImage);
        })();
    }, []);

    return (
        <Element>
            <Profile source={profileURL} name={profileName} image={profileImage}/>
            <Search/>
        </Element>
    );
}

export default Header;