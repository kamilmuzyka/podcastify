import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SEARCH_TYPES } from '../../../constants';
import Button from '../../../UI/Button/Button';

const Header = styled.header`
    color: ${({ theme }) => theme.colors.specific};
`;

const Image = styled.img``;

const Lead = styled.h2`
    position: relative;
    margin: 0.5em 0;
    font-size: 2em;
    color: ${({ theme }) => theme.colors.positive};
`;

const Label = styled.div`
    font-size: ${({ theme }) => theme.typography.small};
    color: ${({ theme }) => theme.colors.specific};
    font-weight: 400;
`;

const Type = styled(Label)`
    margin-bottom: 0.5em;
`;

const Publisher = styled(Label)`
    margin-top: 0.5em;
`;

const Description = styled.p`
`;

const Controls = styled.div`
    margin-top: 1em;
`;

const Link = styled.a`
    margin-left: 1em;
    color: inherit;
`;

const Details = ({ name, publisher, source, description, image, type }) => {

    return (
        <Header>
            <Image src={image} alt="" />
            <Lead>
                <Type>
                    {type[0].toUpperCase() + type.substring(1)}
                </Type>

                {name}

                <Publisher>
                    By {publisher}
                </Publisher>
            </Lead>
            <Description>{description}</Description>
            <Controls>
                <Button type="button">Follow</Button>
                <Link href={source}>Listen on Spotify</Link>
            </Controls>
        </Header>
    );
}

Details.propTypes = {
    type: PropTypes.oneOf([SEARCH_TYPES.show, SEARCH_TYPES.episode])
}

export default Details;