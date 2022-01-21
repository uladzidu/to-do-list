import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";

export type TasksPropsType = {
    id: string
    title: string
    isDone: boolean
}
type TodolistPropsType = {
    title: string
    tasks: Array<TasksPropsType>
    deleteTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}


export function Todolist(props: TodolistPropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.charCode === 13) {
            props.addTask(newTaskTitle);
            setNewTaskTitle('')
        }
    }
    const addingTask = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle('')
    }
    const onAllClickHandler = () => props.changeFilter('all')
    const onActiveClickHandler = () => props.changeFilter('active')
    const onCompletedClickHandler = () => props.changeFilter('completed')


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                />
                <button onClick={addingTask}>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(t => {
                        const onRemoveHandler = () => props.deleteTask(t.id)
                        return <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/><span>{t.title}</span>
                            <button onClick={onRemoveHandler}>x</button>
                        </li>
                    })
                }
            </ul>
            <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    )
}