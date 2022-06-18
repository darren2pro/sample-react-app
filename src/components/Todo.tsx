import React from 'react';

type TodoProps = {
    name: string;
    isCompleted: boolean;
    id: string;
    toggleTaskCompleted: (id: string) => void;
};

const Todo = (props: TodoProps) => {
    const item = props.name;

    return (
        <li className="todo stack-small">
            <div className="c-cb">
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.isCompleted}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
                <label className="todo-label" htmlFor={props.id}>
                    {item}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn">
                    Edit <span className="visually-hidden">{item}</span>
                </button>
                <button type="button" className="btn btn__danger">
                    Delete <span className="visually-hidden">{item}</span>
                </button>
            </div>
        </li>
    );
};

export default Todo;
