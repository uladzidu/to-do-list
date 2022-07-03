import React, {ChangeEvent,KeyboardEvent, useState} from "react";
import {FilterType} from "./App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodolistPropsType = {
    todolistId : string
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistId: string,taskId : string) => void
    removeTodolist : (todolistId : string) => void
    changeFilter : (todolistId : string,filterValue : FilterType) => void
    filter : FilterType
    addTask : (todolistId: string,newTaskTitle : string) => void
    changeCheckBoxStatus : (todolistId: string,taskId : string, isDone : boolean) => void
}

export function Todolist(props: TodolistPropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError('');
        setNewTaskTitle(e.currentTarget.value);
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if ((e.ctrlKey && e.key === 'Enter') && newTaskTitle.trim() !== '') {
            props.addTask(props.todolistId,newTaskTitle.trim());
            setNewTaskTitle('');

        } else {
            setError('Field is required')
        }
    }

    const todolistAddTask = () => {
        if (newTaskTitle.trim() !== '' ) {
            props.addTask(props.todolistId,newTaskTitle.trim())
        } else {
            setError('Field is required')
        }
        setNewTaskTitle('')}
    const removeTodolistHandler = () => {props.removeTodolist(props.todolistId)}

    const allChangeFilterHandler = () => {props.changeFilter(props.todolistId,'all')}
    const activeChangeFilterHandler = () => {props.changeFilter(props.todolistId,'active')}
    const completedChangeFilterHandler = () => {props.changeFilter(props.todolistId,'completed')}


    return (
        <div>
            <h3>
                {props.title}
                <button onClick={removeTodolistHandler}>x</button>
            </h3>
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

                    const todolistRemoveTask = () => {props.removeTask(props.todolistId, elem.id)}
                    const checkBoxOnChangeHandler = (e : ChangeEvent<HTMLInputElement>) =>
                    {props.changeCheckBoxStatus (props.todolistId,elem.id, e.currentTarget.checked)}

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