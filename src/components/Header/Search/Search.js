import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { SearchContext } from '../../../context/SearchProvider';

const Element = styled.input`
    padding: 0.5em 1em;
    min-width: 225px;
    font: inherit;
    font-size: 0.9em;
    margin-right: calc(1em + 10px);
    border: none;
    border-radius: 100px;
    outline: none;
`;

function Search(props) {

    const { updateQuery } = useContext(SearchContext);

    const handleChange = (e) => {
        const query = e.target.value;
        updateQuery(query);
        props.history.push(`/search`);
    }

    return (
        <Element type="text" placeholder="Search" onChange={handleChange}/>
    );
}

export default withRouter(Search);