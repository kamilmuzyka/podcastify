import React from 'react';
import styled from 'styled-components';
import LikeIcon from '../../../../UI/LikeIcon/LikeIcon';

const Outer = styled.div`
    position: relative;
    width: 100%;
    padding-top: 100%;
`;

const Inner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover div {
        opacity: 1;
        visibility: visible;
    }
`;

const Hidden = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
    cursor: pointer;
`;

const Header = styled.header`
    padding-top: 1em;
    word-wrap: break-word;
`;

const Lead = styled.h2`
    font-size: 1em;
    font-weight: 400;
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const Description = styled.p`
    display: inline-box;
    margin-top: 0.5em;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; /* Number of lines */
    font-size: 0.9em;
    line-height: 125%;
    color: ${({ theme }) => theme.colors.specific};
`;

function Show(props) {
    return (
        <li>
            <Outer>
                <Inner>
                    <img src={props.image} alt={props.title}/>
                    <Hidden>
                        <LikeIcon scale={2} />
                    </Hidden>
                </Inner>
            </Outer>
            <Header>
                <Lead>
                    <Link>
                        {props.title}
                    </Link>
                </Lead>
                <Description>
                    {props.description}
                </Description>
            </Header>
        </li>
    );
}

export default Show;