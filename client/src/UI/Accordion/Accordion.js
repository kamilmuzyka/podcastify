import React, { useState } from 'react';
import styled from 'styled-components';

const Element = styled.p`
    max-height: ${({ isOpen, lines }) => isOpen ? '75em' : lines ? lines * 1.5 + 'em' : '3em'};
    line-height: 1.5;
    overflow: hidden;
    overflow-wrap: anywhere;
    text-overflow: ellipsis;
    cursor: pointer;
`;

const Accordion = ({ children, ...rest}) => {
    const [isOpen, updateIsOpen] = useState(false);

    const toggleHandler = () => {
        updateIsOpen(prev => !prev);
    }

    return (
        <Element {...rest} isOpen={isOpen} onClick={toggleHandler}>
            {children}
        </Element>
    );
}

export default Accordion;