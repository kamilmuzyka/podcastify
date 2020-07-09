import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Element = styled.span`
    svg {
        transform: scale(${props => props.scale ? props.scale : 1});
        transition: fill .2s ease-in-out;
    }

    &:hover {
        cursor: pointer;

        svg {
            fill: ${props => props.active ? '#AAAAAA' : 'var(--accent)'};
        }
    }
`;

function Like(props) {
    return (
        <Element scale={props.scale} active={props.active}>
            <svg fill="#FFFFFF" height="24" version="1.1" width="24" xmlns="http://www.w3.org/2000/svg" xmlnscc="http://creativecommons.org/ns#" xmlnsdc="http://purl.org/dc/elements/1.1/" xmlnsrdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><g transform="translate(0 -1028.4)"><path d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z"/></g></svg>
        </Element>
    );
}

Like.propTypes = {
    // Define a size of the icon
    scale: PropTypes.number,

    // Define the hover behaviour:
    // - False (Default) - Element has not been liked yet
    // - True - Element has been liked already
    active: PropTypes.bool
}

export default Like;