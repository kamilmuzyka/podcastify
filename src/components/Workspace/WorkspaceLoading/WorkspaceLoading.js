import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 900;
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: ${({ loading }) => loading === 'true' ? '1' : '0'};
    visibility: ${({ loading }) => loading === 'true' ? 'visible' : 'hidden'};
`;

const WorkspaceLoading = (props) => {
    return (
        <Element {...props}/>
    );
}

export default WorkspaceLoading;