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

    img, svg {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    svg path {
        fill: ${({ theme }) => theme.colors.positive};
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
                { image ?
                    <img src={image} alt={`${name}'s profile`}/>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43">
                        <path d="M27.609,5a21.5,21.5,0,1,0,18.9,31.76,21.12,21.12,0,0,0,2.6-10.26A21.5,21.5,0,0,0,27.609,5Zm0,1.792A19.7,19.7,0,0,1,42.761,39.085c-1.965-.821-6.6-2.43-9.475-3.278C33.042,35.731,33,35.718,33,34.7a5.882,5.882,0,0,1,.684-2.407,12.339,12.339,0,0,0,.955-3.266,7.356,7.356,0,0,0,1.41-3.4,4.484,4.484,0,0,0-.044-2.857c-.023-.06-.047-.12-.065-.179a18.678,18.678,0,0,1,.318-4.017,7.365,7.365,0,0,0-1.547-5.308,7.922,7.922,0,0,0-6.054-2.9l-1.811,0a7.888,7.888,0,0,0-6,2.9,7.364,7.364,0,0,0-1.547,5.308,18.7,18.7,0,0,1,.32,4.01,1.473,1.473,0,0,1-.066.187,4.488,4.488,0,0,0-.042,2.857,7.317,7.317,0,0,0,1.41,3.4,12.21,12.21,0,0,0,.955,3.266,5.812,5.812,0,0,1,.394,2.443c0,1.019-.039,1.031-.268,1.1-2.969.877-7.7,2.584-9.457,3.356a19.694,19.694,0,0,1,15.058-32.4Zm-13.76,33.8c2.017-.824,6.04-2.258,8.682-3.039,1.536-.485,1.536-1.779,1.536-2.818a7.738,7.738,0,0,0-.563-3.206,10.131,10.131,0,0,1-.829-2.985.888.888,0,0,0-.3-.6,5.342,5.342,0,0,1-1.1-2.677c-.261-1.3-.15-1.583-.044-1.858a3.476,3.476,0,0,0,.124-.363,17.56,17.56,0,0,0-.285-4.8,5.608,5.608,0,0,1,1.2-3.883,6.113,6.113,0,0,1,4.644-2.209l1.7,0a6.154,6.154,0,0,1,4.7,2.211A5.6,5.6,0,0,1,34.5,18.248a17.616,17.616,0,0,0-.285,4.8c.037.131.079.247.124.364.107.275.217.559-.042,1.858a5.335,5.335,0,0,1-1.1,2.677.9.9,0,0,0-.3.6,10.084,10.084,0,0,1-.828,2.985,7.607,7.607,0,0,0-.854,3.17c0,1.039,0,2.333,1.552,2.822,2.528.747,6.57,2.135,8.7,2.975a19.665,19.665,0,0,1-27.619.1Z" transform="translate(-6.109 -5)"/>
                    </svg>
                }
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