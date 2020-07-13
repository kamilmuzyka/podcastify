import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    align-items: start;
`;

function Workspace(props) {
    return (
        <Main>
            {props.children}
        </Main>
    );
}

export default Workspace;