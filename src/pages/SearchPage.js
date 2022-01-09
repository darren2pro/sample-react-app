import BasicList from '../components/BasicList';
import SearchBar from '../components/SearchBar';
import React, { useState, useEffect, createElement } from 'react';

const SearchPage = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [allTools, setAllTools] = useState(['']);
    const [filteredTools, setFilteredTools] = useState(['']);
    const data = ['Bob', 'Jen', 'Dave', 'Ash'];

    async function fetchData() {
        console.log('Fetching data');
        const allTools = [];
        const basicList = BasicList.call();
        const allWebToolsList = basicList.props.children[1].props.children;
        for (let i = 0; i < allWebToolsList.length; i++) {
            const tool = allWebToolsList[i].props.children;
            allTools.push(tool);
        }
        // Finally, we set the allTools
        setAllTools(allTools);
        console.log('allTools: ', allTools);
    }

    const updateInput = (input) => {
        const filtered = allTools.filter((tool) => {
            return tool.toLowerCase().includes(input.toLowerCase());
        });
        setSearchQuery(input);
        setFilteredTools(filtered);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1>{'Search page: development tools'}</h1>
            <br />
            <SearchBar input={searchQuery} onChange={updateInput} />
            <p>{filteredTools.toString()}</p>
            <p>{'Showing you the full list'}</p>
            <BasicList />
        </>
    );
};

export default SearchPage;
