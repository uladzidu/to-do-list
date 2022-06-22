import React, {ChangeEvent,KeyboardEvent, useState} from "react";
import {FilterType} from "./App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId : string) => void
    changeFilter : (filterValue : FilterType) => void
    filter : FilterType
    addTask : (newTaskTitle : string) => void
    changeCheckBoxStatus : (taskId : string, isDone : boolean) => void
}

export function Todolist(props: TodolistPropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError('');
        setNewTaskTitle(e.currentTarget.value);
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.charCode === 13 && newTaskTitle.trim() !== '') {
            props.addTask(newTaskTitle.trim());
            setNewTaskTitle('');
        } else {
            setError('Field is required')
        }
    }

    const todolistAddTask = () => {
        if (newTaskTitle.trim() !== '' ) {
            props.addTask(newTaskTitle.trim())
        } else {
            setError('Field is required')
        }
        setNewTaskTitle('')}

    const allChangeFilterHandler = () => {props.changeFilter('all')}
    const activeChangeFilterHandler = () => {props.changeFilter('active')}
    const completedChangeFilterHandler = () => {props.changeFilter('completed')}


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler }
                       className={error ? 'error' : ''}
                />
                <button onClick={todolistAddTask}>+</button>
            </div>
            <div className={'error-message'}>{error}</div>
            <ul>
                {props.tasks.map(elem => {

                    const todolistRemoveTask = () => {props.removeTask(elem.id)}
                    const checkBoxOnChangeHandler = (e : ChangeEvent<HTMLInputElement>) =>
                    {props.changeCheckBoxStatus (elem.id, e.currentTarget.checked)}

                    return (
                        <li key={elem.id} className={ elem.isDone ? 'isDone' : ''}>
                            <input type="checkbox"
                                   checked={elem.isDone}
                                   onChange={checkBoxOnChangeHandler}/>
                            <span>{elem.title}</span>
                            <button onClick={todolistRemoveTask}>x</button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button className={props.filter === 'all' ? 'active-filter' : ''} onClick={allChangeFilterHandler}>All</button>
                <button className={props.filter === 'active' ? 'active-filter' : ''} onClick={activeChangeFilterHandler}>Active</button>
                <button className={props.filter === 'completed' ? 'active-filter' : ''} onClick={completedChangeFilterHandler}>Completed</button>
            </div>
        </div>

    )
}