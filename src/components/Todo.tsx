import React, { useEffect, useRef, useState } from 'react';

type TodoProps = {
    name: string;
    isCompleted: boolean;
    id: string;
    toggleTaskCompleted: (id: string) => void;
    deleteTask: (id: string) => void;
    editTask: (id: string, newName: string) => void;
};

export function usePrevious(value: boolean | number): boolean | number | undefined {
    const ref = useRef();
    useEffect(() => {
        // @ts-ignore - assigning boolean to the ref's current value is allowed
        ref.current = value;
    });
    return ref.current;
}

const Todo = (props: TodoProps) => {
    const item = props.name;
    const [isEditing, setIsEditing] = useState(false);
    const wasEditing = usePrevious(isEditing);
    const [newName, setNewName] = useState(item);

    // Used for keyboard-only users and screen-reader users, so the in-focus html element doesn't get lost
    const editFieldRef = useRef(null);
    const editButtonRef = useRef(null);

    function handleNewNameChange(event: React.ChangeEvent<HTMLInputElement>) {
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
                    ref={editButtonRef}
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
                    ref={editFieldRef}
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

    useEffect(() => {
        if (!wasEditing && isEditing) {
            // @ts-ignore - will never be null because I set the ref already
            editFieldRef.current.focus();
        }
        if (wasEditing && !isEditing) {
            // @ts-ignore - will never be null because I set the ref already
            editButtonRef.current.focus();
        }
    }, [wasEditing, isEditing]);

    return <li className="todo">{isEditing ? editTemplate : viewTemplate}</li>;
};

export default Todo;
