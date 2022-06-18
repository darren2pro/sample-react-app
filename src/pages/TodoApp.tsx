import React, { useState } from 'react';
import Todo from '../components/Todo';
import Form from '../components/Form';
import FilterButton from '../components/FilterButton';
import { nanoid } from "nanoid";

type TodoItem = {
    id: string;
    name: string;
    isCompleted: boolean;
};

type TodoAppProps = {
    tasks: TodoItem[];
};

const TodoApp = (props: TodoAppProps) => {
    const [tasks, setTasks] = useState(props.tasks);

    const addTask = (taskName: string) => {
        const generatedId = nanoid();

        const newTask: TodoItem = {
            id: `todo-${generatedId}`,
            name: taskName,
            isCompleted: false
        };
        setTasks([...tasks, newTask]);
    };

    function toggleTaskCompleted(id: string) {
        const toggledTask = tasks.find(task => task.id === id);
        if (toggledTask) {
            toggledTask.isCompleted = !toggledTask.isCompleted;
        }
    }

    const taskList = tasks.map((task) => (
        // You should always pass a unique key to anything you render with iteration
        <Todo
            key={task.id}
            id={task.id}
            name={task.name}
            isCompleted={task.isCompleted}
            toggleTaskCompleted={toggleTaskCompleted}
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
                <FilterButton />
                <FilterButton />
                <FilterButton />
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
