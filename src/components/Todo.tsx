import React, { useState } from 'react';

type TodoProps = {
    name: string;
    isCompleted: boolean;
    id: string;
    toggleTaskCompleted: (id: string) => void;
    deleteTask: (id: string) => void;
    editTask: (id: string, newName: string) => void;
};

const Todo = (props: TodoProps) => {
    const item = props.name;
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(item);

    function handleNewNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log('New target value: ' + event.target.value);
        setNewName(event.target.value);
    }

    function handleNewNameSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        props.editTask(props.id, newName);
        setNewName(newName);
        setIsEditing(false);
    }

    const viewTemplate = (
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
                <button
                    type="button"
                    className="btn"
                    onClick={() => setIsEditing(true)}
                >
                    Edit <span className="visually-hidden">{item}</span>
                </button>
                <button
                    type="button"
                    className="btn btn__danger"
                    onClick={() => props.deleteTask(props.id)}
                >
                    Delete <span className="visually-hidden">{item}</span>
                </button>
            </div>
        </li>
    );

    const editTemplate = (
        <form className="todo stack-small" onSubmit={handleNewNameSubmit}>
            <div className="form-group">
                <label className="todo-label" htmlFor={props.id}>
                    New name for {item}
                </label>
                <input
                    id={props.id}
                    className="todo-text"
                    type="text"
                    value={newName}
                    onChange={handleNewNameChange}
                />
            </div>
            <div className="btn-group">
                <button
                    type="button"
                    className="btn todo-cancel"
                    onClick={() => setIsEditing(false)}
                >
                    Cancel{' '}
                    <span className="visually-hidden">renaming {item}</span>
                </button>
                <button type="submit" className="btn btn__primary todo-edit">
                    Save{' '}
                    <span className="visually-hidden">new name for {item}</span>
                </button>
            </div>
        </form>
    );

    return <li className="todo">{isEditing ? editTemplate : viewTemplate}</li>;
};

export default Todo;
