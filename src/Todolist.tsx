import React from "react";
import {FilterPropsType} from "./App";

export type TasksPropsType = {
    id: number
    title: string
    isDone: boolean
}
type TodolistPropsType = {
    title: string
    tasks: Array<TasksPropsType>
    deleteTask: (id : number) => void
    setFilter: (props : FilterPropsType) => void
}


export function Todolist(props: TodolistPropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(t =>
                        <li>
                            <input type="checkbox" checked={t.isDone}/><span>{t.title}</span>
                            <button onClick={() => {props.deleteTask(t.id)}}>x</button>
                        </li>
                    )
                }
            </ul>
            <div>
                <button onClick={ () => {props.setFilter('all')}}>All</button>
                <button onClick={ () => {props.setFilter('active')}}>Active</button>
                <button onClick={ () => {props.setFilter('completed')}}>Completed</button>
            </div>
        </div>
    )
}