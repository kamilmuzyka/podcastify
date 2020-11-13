import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
    color: ${({ theme }) => theme.colors.specific}
`;

const Message = ({ children, ...rest }) => {
    return (
        <Element {...rest}>
            {children}
        </Element>
    );
}

export default Message;