import React from 'react';

type searchBarProps = {
    input: string;
    onChange: (updatedText: string) => void;
};

const SearchBar = (props: searchBarProps) => {
    return (
        <input
            className="input input__lg1"
            value={props.input ? props.input : ''}
            placeholder="search web dev tools/concepts"
            onChange={(e) => props.onChange(e.target.value)}
        />
    );
};

export default SearchBar;
