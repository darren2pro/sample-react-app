import React from 'react';
import '../App.css';

// eslint-disable-next-line react/prop-types
const SearchBar = (props) => {
    const BarStyling = { width: '20rem', background: '#F2F1F9', border: 'none', padding: '0.5rem' };
    return (
        <input
            style={BarStyling}
            key="random1"
            /* eslint-disable-next-line react/prop-types */
            value={props.input ? props.input : ''}
            placeholder="search web dev tools/concepts"
            /* eslint-disable-next-line react/prop-types */
            onChange={(e) => props.onChange(e.target.value)}
        />
    );
};

export default SearchBar;
