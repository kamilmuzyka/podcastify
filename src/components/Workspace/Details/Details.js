import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SEARCH_TYPES } from '../../../constants';
import Accordion from '../../../UI/Accordion/Accordion';
import Button from '../../../UI/Button/Button';

const Image = styled.img`
    display: block;
    width: 100%;
    object-fit: contain;
    object-position: top;

    @media (min-width: 1024px) {
        max-width: 250px;
    }
`;

const Header = styled.header``;

const Lead = styled.h2`
    position: relative;
    max-width: calc(0.5em * 50);
    font-size: 2em;
    color: ${({ theme }) => theme.colors.positive};
`;

const Label = styled.p`
    font-size: ${({ theme }) => theme.typography.small};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.specific};
`;

const Type = styled(Label)`
    margin: 1em 0 0.5em 0;

    @media (min-width: 1024px) {
        margin: 0 0 0.5em 0;
    }
`;

const Publisher = styled(Label)`
    margin: 0.5em 0 1em 0;
`;

const Description = styled(Accordion)`
    max-width: calc(1em * 50);
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

const Details = ({ name, publisher, source, description, image, type }) => {
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
                        <Link href={source}>Listen on Spotify</Link>
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