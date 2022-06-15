import React from "react";

const SearchBar = (props) => {
    return (
        <input
            className="input input__lg1"
            value={props.input ? props.input : ""}
            placeholder="search web dev tools/concepts"
            onChange={(e) => props.onChange(e.target.value)}
        />
    );
};

export default SearchBar;
