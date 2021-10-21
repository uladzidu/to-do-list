import { type } from 'os';
import React from 'react';


export type ArrayType = {
    id : number
    title : string
    isDone : boolean
}


type PropsType = {
    
    title : string
    tasks : Array<ArrayType>
}


export function Todolist( props : PropsType ) { // использую title и tasks. То что использовано возле самой компоненты
    return (
        <div>
            <h3> {props.title} </h3>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map( (t) => {
                        return <li><input type="checkbox" checked={t.isDone} /> <span>{t.title}</span></li>
                    } )
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