import React from 'react';
import styled from 'styled-components';
import LoadingIcon from '../../LoadingIcon/LoadingIcon';

const Container = styled.a`
    display: flex;
    align-items: center;
    position: relative;
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

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 37px;
    height: 37px;
    transform: translate(-1px, -1px);
    background-color: var(--primary);
    border-radius: 50%;
    opacity: ${props => props.loading === "true" ? 1 : 0};
    visibility: ${props => props.loading === "false" ? 'visible' : 'none'};
    transition: opacity 0.1s ease-in-out,
                visibility 0.1s ease-in-out
`;

const Name = styled.p`
    margin-left: 0.75em;
`;

const StyledLoadingIcon = styled(LoadingIcon)`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.25);
`;

function Profile(props) {
    return (
        <Container href={props.source}>
            <Photo>
                <img src={props.image} alt={`${props.name}'s profile photo`}/>
            </Photo>
            <Overlay loading={props.loading}>
                <StyledLoadingIcon/>
            </Overlay>
            <Name>
                {props.name}
            </Name>
        </Container>
    );
}

export default Profile;