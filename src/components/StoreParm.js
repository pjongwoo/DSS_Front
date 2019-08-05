import React from 'react';
import queryString from 'query-string';
import StoreMap from './StoreMap'

const storeshow = ({location}) => {
    const query = queryString.parse(location.search);
    return (
        <div>
            <StoreMap plase={query}/>     
        </div>
    );
};

export default storeshow;