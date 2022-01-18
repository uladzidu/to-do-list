import React from "react";

export type taskPropsType = {
    id: number
    title: string
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: Array<taskPropsType>
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
                    props.tasks.map(m =>
                        <li><input type="checkbox" checked={m.isDone}/><span>{m.title}</span>
                        <button>x</button>
                        </li>)
                }
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}