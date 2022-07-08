import React, {ChangeEvent, useState} from 'react';
import {FilterType, TaskType, TodolistsType} from "./App";
import Input from "./components/Input";

export type TodolistPropsType = {
    todolistId: string
    todolists: TodolistsType[]
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistId: string, taskId: string) => void
    changeFilter: (todolistId: string, filter: FilterType) => void
    addTask: (todolistId : string, newTitle : string) => void
    filter : FilterType
    removeTodolist : (todolistId: string) => void
    changeCheckBoxStatus : (todolistId: string, taskId : string, value : boolean) => void
    addTodolist : (newTitle : string) => void
}

export const Todolist = (props: TodolistPropsType) => {

    const allFilterHandler = () => {props.changeFilter(props.todolistId, 'all')}
    const activeFilterHandler = () => {props.changeFilter(props.todolistId, 'active')}
    const completedFilterHandler = () => {props.changeFilter(props.todolistId, 'completed')}

    const removeTodolistHandler = () => {props.removeTodolist(props.todolistId)}

    const classNameForAll = props.filter === 'all' ? 'active' : ''
    const classNameForActive = props.filter === 'active' ? 'active' : ''
    const classNameForCompleted = props.filter === 'completed' ? 'active' : ''


    return (
        <div>
            <h3>
                {props.title}
                <button onClick={removeTodolistHandler}>x</button>
            </h3>
            <Input
                callback={ (newTitle : string) => {props.addTask(props.todolistId,newTitle)} }
            />
            <ul>
                {props.tasks.map((elem: TaskType) => {

                        const removeTaskHandler = () => {props.removeTask(props.todolistId, elem.id)}
                        const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeCheckBoxStatus(props.todolistId, elem.id, e.currentTarget.checked)
                        }

                        return (
                            <li key={elem.id}>
                                <input type="checkbox" checked={elem.isDone} onChange={onChangeCheckboxHandler}/>
                                <span> {elem.title} </span>
                                <button onClick={removeTaskHandler}>x</button>
                            </li>
                        )
                    }
                )
                }


            </ul>

            <button className={classNameForAll} onClick={allFilterHandler}>All</button>
            <button className={classNameForActive} onClick={activeFilterHandler}>Active</button>
            <button className={classNameForCompleted} onClick={completedFilterHandler}>Completed</button>

        </div>
    );
};
