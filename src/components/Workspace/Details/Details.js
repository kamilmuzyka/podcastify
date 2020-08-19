import React from 'react';
import { withRouter } from 'react-router-dom';

const Details = (props) => {
    return (
        <div>{props.location.search.slice(1, -1)}</div>
    );
}

export default withRouter(Details);