import React, { useState } from 'react';
import styled from 'styled-components';

const Element = styled.p`
    display: block;
    max-height: ${({ isOpen }) => isOpen ? '75em' : '4.5em'};
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    transition: max-height 0.9s ease-in-out;
    cursor: pointer;

    @media (min-width: 1024px) {
        max-height: ${({ isOpen }) => isOpen ? '50em' : '4.5em'};
        transition: max-height 0.6s ease-in-out;
    }
`;

const Accordion = (props) => {
    const [isOpen, updateIsOpen] = useState(false);

    const toggleHandler = () => {
        updateIsOpen(prev => !prev);
    }

    return (
        <Element {...props} isOpen={isOpen} onClick={toggleHandler}>
            {props.children}
        </Element>
    );
}

export default Accordion;