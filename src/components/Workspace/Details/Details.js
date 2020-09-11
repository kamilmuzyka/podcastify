import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SEARCH_TYPES } from '../../../constants';
import Accordion from '../../../UI/Accordion/Accordion';
import Button from '../../../UI/Button/Button';

const Image = styled.img`
    display: block;
    max-width: 250px;
    object-fit: contain;
    object-position: top;
`;

const Header = styled.header``;

const Lead = styled.h2`
    position: relative;
    font-size: 2em;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.positive};

    @media (min-width: 500px) {
        max-width: calc(0.5em * 50);
    }
`;

const Label = styled.p`
    font-size: ${({ theme }) => theme.typography.small};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.specific};
`;

const Type = styled(Label)`
    margin: 1em 0 0.25em 0;

    @media (min-width: 1024px) {
        margin: 0 0 0.25em 0;
    }
`;

const Publisher = styled(Label)`
    margin: 0.25em 0 1em 0;
`;

const Description = styled(Accordion)`
    color: ${({ theme }) => theme.colors.specific};
`;

const Controls = styled.div`
    margin-top: 1em;
`;

const ExternalLink = styled.a`
    margin-left: 1em;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.specific};

    &:hover {
        text-decoration: underline;
    }
`;

const Split = styled.div`
    @media (min-width: 1024px) {
        display: flex;
    }
`;

const Content = styled.div`
    @media (min-width: 1024px) {
        margin-left: 3em;
    }
`;

const Details = ({ name, publisher, external, description, image, type }) => {
    return (
        <Fragment>
            <Split>
                <Image src={image} alt="" />
                <Content>
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
                        <ExternalLink href={external}>Listen on Spotify</ExternalLink>
                    </Controls>
                </Content>
            </Split>
        </Fragment>
    );
}

Details.propTypes = {
    type: PropTypes.oneOf([SEARCH_TYPES.show, SEARCH_TYPES.episode])
}

export default Details;