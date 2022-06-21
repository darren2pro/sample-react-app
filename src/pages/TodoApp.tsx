import React, { useState } from 'react';
import Todo from '../components/Todo';
import Form from '../components/Form';
import FilterButton from '../components/FilterButton';
import { nanoid } from 'nanoid';

type TodoItem = {
    id: string;
    name: string;
    isCompleted: boolean;
};

type TodoAppProps = {
    tasks: TodoItem[];
};

export enum FilterState {
    All = 'All',
    Active = 'Active',
    Completed = 'Completed',
}

const FILTER_MAP = {
    [FilterState.All]: () => true,
    [FilterState.Active]: (task: TodoItem) => !task.isCompleted,
    [FilterState.Completed]: (task: TodoItem) => task.isCompleted,
};

// Casting from type string to FilterState
const FILTER_NAMES_STATE = Object.keys(FILTER_MAP).map(
    (key) => key as FilterState
);

const TodoApp = (props: TodoAppProps) => {
    const [tasks, setTasks] = useState(props.tasks);
    const [filterState, setFilterState] = useState(FilterState.All);
    const filteredTasksButton = FILTER_NAMES_STATE.map((name) => (
        <FilterButton
            key={name}
            name={name}
            isPressed={name === filterState}
            setFilterState={setFilterState}
        />
    ));

    const addTask = (taskName: string) => {
        const generatedId = nanoid();

        const newTask: TodoItem = {
            id: `todo-${generatedId}`,
            name: taskName,
            isCompleted: false,
        };
        setTasks([...tasks, newTask]);
    };

    function toggleTaskCompleted(id: string) {
        const toggledTask = tasks.find((task) => task.id === id);
        if (toggledTask) {
            toggledTask.isCompleted = !toggledTask.isCompleted;
        }
    }

    function deleteTask(id: string) {
        const filteredTasks = tasks.filter((task) => task.id !== id);
        setTasks(filteredTasks);
    }

    function editTask(id: string, newName: string) {
        const editedTaskList = tasks.map((task) => {
            if (task.id === id) {
                // Object destructuring syntax
                return { ...task, name: newName };
            }
            return task;
        });
        setTasks(editedTaskList);
    }

    const taskList = tasks
        .filter(FILTER_MAP[filterState])
        .map((task) => (
        // You should always pass a unique key to anything you render with iteration
        <Todo
            key={task.id}
            id={task.id}
            name={task.name}
            isCompleted={task.isCompleted}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
        />
    ));

    // Task list heading
    const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
    const headingText = `${taskList.length} ${tasksNoun} remaining`;

    return (
        <div className="todoapp stack-large">
            <h1>{'TodoMatic'}</h1>
            <Form addTask={addTask} />
            <div className="filters btn-group stack-exception">
                {filteredTasksButton}
            </div>
            <h2 id="list-heading">{headingText}</h2>
            {/*
                The role of list is needed because the css will break that functionality. We must explicitly state
                that it is a list to restore the list role. ARIA is a set of roles and attributes that help to make
                HTML webpages more accessible to people with disabilities.
            */}
            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading"
            >
                {taskList}
            </ul>
        </div>
    );
};

export default TodoApp;
