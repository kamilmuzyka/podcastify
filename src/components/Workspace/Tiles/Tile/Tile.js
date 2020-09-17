import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { SEARCH_TYPES } from '../../../../constants';
import styled from 'styled-components';

const Item = styled.li`
    margin-bottom: 2em;

    &:last-child {
        margin-bottom: 0;
    }

    @media (min-width: 500px) {
        margin-bottom: 0;
    }
`;

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

const Header = styled.header`
    word-wrap: break-word;
`;

const Lead = styled.h2`
    display: -webkit-box;
    margin-top: 0.75em;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-size: 1em;
    font-weight: 400;
`;

const InternalLink = styled(Link)`
    display: block;
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const Description = styled.p`
    display: -webkit-box;
    margin-top: 0.25em;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; /* Number of lines */
    color: ${({ theme }) => theme.colors.specific};
`;

function Tile({ id, title, description, image, type}) {
    const [reference, updateReference] = useState('');

    useEffect(() => {
        if (type === SEARCH_TYPES.show) {
            updateReference(`/shows/${id}`);
            return;
        }

        if (type === SEARCH_TYPES.episode) {
            updateReference(`/episodes/${id}`);
            return;
        }

        throw new Error('Wrong type provided. Should be one of \'shows\', \'episodes\'.');
    }, [id, type]);

    return (
        <Item>
            <Outer>
                <Inner>
                    <InternalLink to={reference}>
                        <img src={image} alt={title}/>
                    </InternalLink>
                </Inner>
            </Outer>
            <Header>
                <Lead>
                    <InternalLink to={reference}>
                        {title}
                    </InternalLink>
                </Lead>
                <Description>
                    {description}
                </Description>
            </Header>
        </Item>
    );
}

export default withRouter(Tile);