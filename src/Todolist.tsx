import React, {ChangeEvent,KeyboardEvent, useState} from "react";
import {FilterType} from "./App";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId : string) => void
    changeFilter : (filterValue : FilterType) => void
    addTask : (newTaskTitle : string) => void
}

export function Todolist(props: TodolistPropsType) {

    let [newTaskTitle, setNewTaskTitle] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => { setNewTaskTitle(e.currentTarget.value)}
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => { if (e.ctrlKey && e.charCode === 13) {
        props.addTask(newTaskTitle)
        setNewTaskTitle('')
    } }
    const todolistAddTask = () => {props.addTask(newTaskTitle)
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
                />
                <button onClick={todolistAddTask}>+</button>
            </div>
            <ul>
                {props.tasks.map(elem => {

                    const todolistRemoveTask = () => {props.removeTask(elem.id)}

                    return (
                        <li key={elem.id}><input type="checkbox" checked={elem.isDone}/><span>{elem.title}</span>
                            <button onClick={todolistRemoveTask}>x</button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={allChangeFilterHandler}>All</button>
                <button onClick={activeChangeFilterHandler}>Active</button>
                <button onClick={completedChangeFilterHandler}>Completed</button>
            </div>
        </div>

    )
}