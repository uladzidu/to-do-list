import { type } from 'os';
import React from 'react';


export type ArrayType = {
    id: number
    title: string
    isDone: boolean
}


type PropsType = {

    title: string
    tasks: Array<ArrayType>
    removeTask : Function
}


export function Todolist(props: PropsType) { // использую title и tasks. То что использовано возле самой компоненты
    return (
        <div>
            <h3> {props.title} </h3>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map (t => <li><input type="checkbox" checked={t.isDone} />
                            <span>{t.title}</span>
                            <button onClick={() => { props.removeTask(t.id) }} >x</button>
                        </li>
                    )
                }
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
}