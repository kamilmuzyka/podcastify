import React from 'react';
import styled from 'styled-components';
import RotatingIcon from '../../../UI/RotatingIcon/RotatingIcon';

const ExternalLink = styled.a`
    display: flex;
    align-items: center;
    align-self: flex-start;
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
    border-radius: 50%;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.primary};

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
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: ${({ loading }) => loading === "true" ? 1 : 0};
    visibility: ${({ loading }) => loading === "false" ? 'visible' : 'none'};
    transition: opacity 0.3s ease-in-out,
                visibility 0.3s ease-in-out
`;

const Name = styled.p`
    margin-left: 0.75em;
`;

const StyledRotatingIcon = styled(RotatingIcon)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.25);
`;

function Profile({ external, name, image, loading }) {
    return (
        <ExternalLink href={external}>
            <Photo>
                <img src={image} alt={`${name}'s profile`}/>
            </Photo>
            <Overlay loading={loading}>
                <StyledRotatingIcon/>
            </Overlay>
            <Name>
                {name}
            </Name>
        </ExternalLink>
    );
}

export default Profile;