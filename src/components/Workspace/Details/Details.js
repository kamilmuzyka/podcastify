import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SEARCH_TYPES } from '../../../constants';
import Accordion from '../../../UI/Accordion/Accordion';
import Button from '../../../UI/Button/Button';

const Image = styled.img`
    display: block;
    width: 100%;

    @media (min-width: 500px) {
        max-width: 250px;
    }
`;

const Header = styled.header``;

const Lead = styled.h2`
    position: relative;
    font-size: 2em;
    color: ${({ theme }) => theme.colors.positive};
`;

const Label = styled.p`
    font-size: ${({ theme }) => theme.typography.small};
    color: ${({ theme }) => theme.colors.specific};
    font-weight: 400;
`;

const Type = styled(Label)`
    margin: 1em 0 0.5em 0;
`;

const Publisher = styled(Label)`
    margin: 0.5em 0 1em 0;
`;

const Description = styled(Accordion)`
    color: ${({ theme }) => theme.colors.specific};
`;

const Controls = styled.div`
    margin-top: 1em;
`;

const Link = styled.a`
    margin-left: 1em;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.specific};

    &:hover {
        text-decoration: underline;
    }
`;

const Details = ({ name, publisher, source, description, image, type }) => {

    return (
        <Fragment>
            <Image src={image} alt="" />
            <Header>
                <Type>
                    {type[0].toUpperCase() + type.substring(1)}
                </Type>

                <Lead>{name}</Lead>

                <Publisher>
                    By {publisher}
                </Publisher>
            </Header>
            <Description>{description}</Description>
            <Controls>
                <Button type="button">Follow</Button>
                <Link href={source}>Listen on Spotify</Link>
            </Controls>
        </Fragment>
    );
}

Details.propTypes = {
    type: PropTypes.oneOf([SEARCH_TYPES.show, SEARCH_TYPES.episode])
}

export default Details;