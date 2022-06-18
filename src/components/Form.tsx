import React, { useState } from 'react';

type FormProps = {
    addTask: (taskName: string) => void;
};

const Form = (props: FormProps) => {
    const [name, setName] = useState('');

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        // Should usually prevent default behaviour of submit event because you want to check that data was entered correctly
        // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#preventing_default_behavior
        event.preventDefault();
        if (!name) {
            alert('Cannot add empty task');
            return;
        }
        props.addTask(name);
        setName('');
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    {'What needs to be done?'}
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                {'Add'}
            </button>
        </form>
    );
};

export default Form;
