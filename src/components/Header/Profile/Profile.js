import React from 'react';
import styled from 'styled-components';

const Container = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    font: inherit;
    color: inherit;

    &:hover {
        text-decoration: underline;
    }
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
        object-fit: cover;
    }
`;

const Name = styled.p`
    margin-left: 0.75em;
`;

function Profile(props) {
    return (
        <Container href={props.source}>
            <Photo>
                <img src={props.image} alt={`${props.name}'s profile photo`}/>
            </Photo>
            <Name>
                {props.name}
            </Name>
        </Container>
    );
}

export default Profile;