import React from 'react';
import { FilterState } from '../pages/TodoApp';

type FilterButtonProps = {
    key: string;
    name: FilterState;
    isPressed: boolean;
    setFilterState: (filterState: FilterState) => void;
};

const FilterButton = (props: FilterButtonProps) => {
    return (
        <button
            type="button"
            className="btn toggle-btn"
            aria-pressed={props.isPressed}
            onClick={() => props.setFilterState(props.name)}
        >
            <span className="visually-hidden">{'Show '}</span>
            <span>{props.name}</span>
            <span className={'visually-hidden'}>{' Tasks'}</span>
        </button>
    );
};

export default FilterButton;
