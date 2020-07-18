import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
    display: flex;
    align-items: start;
`;

function Wrapper(props) {
    return (
        <Element>
            {props.children}
        </Element>
    );
}

export default Wrapper;