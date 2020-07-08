import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const Photo = styled.div`
    width: 35px;
    height: 35px;
    background-color: var(--primary);
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
    }
`;

const Name = styled.p`
    margin-left: 0.75em;
`;

function Profile(props) {
    return (
        <Container>
        <Photo>
            <img src={props.src} alt=""/>
        </Photo>
        <Name>
            {props.name}
        </Name>
        </Container>
    );
}

Profile.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default Profile;