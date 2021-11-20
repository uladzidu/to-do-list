import React from 'react';

export type ArrayType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {

    title: string
    tasks: Array<ArrayType>
    removeTask : (id: number) => void
}

export function Todolist(props: PropsType) {
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