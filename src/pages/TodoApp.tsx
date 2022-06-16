import React from 'react';
import Todo from '../components/Todo';

const TodoApp: React.FC = (props) => {
    return (
        <div className="todoapp stack-large">
            <h1>{'TodoMatic'}</h1>
            <form>
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
                />
                <button type="submit" className="btn btn__primary btn__lg">
                    {'Add'}
                </button>
            </form>
            <div className="filters btn-group stack-exception">
                <button
                    type="button"
                    className="btn toggle-btn"
                    aria-pressed="true"
                >
                    <span className="visually-hidden">{'Show '}</span>
                    <span>all</span>
                    <span className={'visually-hidden'}>{' Tasks'}</span>
                </button>
                <button
                    type="button"
                    className="btn toggle-btn"
                    aria-pressed="false"
                >
                    <span className="visually-hidden">{'Show '}</span>
                    <span>Active</span>
                    <span className={'visually-hidden'}>{' Tasks'}</span>
                </button>
                <button
                    type="button"
                    className="btn toggle-btn"
                    aria-pressed="false"
                >
                    <span className="visually-hidden">{'Show '}</span>
                    <span>Completed</span>
                    <span className="visually-hidden">{' Tasks'}</span>
                </button>
            </div>
            <h2 id="list-heading">3 tasks remaining</h2>
            {/*
                The role of list is needed because the css will break that functionality. We must explicitly state that it is a list to
                restore the list role. ARIA is a set of roles and attributes that help to make HTML webpages more
                accessible to people with disabilities.
            */}

            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading"
            >
                <Todo name={'Eat'} isCompleted={true} id="todo-0" />
                <Todo name={'Sleep'} isCompleted={false} id="todo-0" />
                <Todo name={'Repeat'} isCompleted={false} id="todo-0" />
            </ul>
        </div>
    );
};

export default TodoApp;
