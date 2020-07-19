import React from 'react';
import styled from 'styled-components';

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
        object-fit: cover;
    }
`;

const Name = styled.a`
    display: block;
    margin-left: 0.75em;
    text-decoration: none;
    font: inherit;
    color: inherit;

    &:hover {
        text-decoration: underline;
    }
`;

function Profile(props) {
    return (
        <Container>
            <Photo>
                <img src={props.image} alt={`${props.name}'s profile photo`}/>
            </Photo>
            <Name href={props.source}>
                {props.name}
            </Name>
        </Container>
    );
}

export default Profile;