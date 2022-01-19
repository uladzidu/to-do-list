import React from 'react';
import './App.css';
import {taskPropsType, Todolist} from "./Todolist";


export function App() {

    let tasks: Array<taskPropsType>  = [
        {id: 1, title: "HTML&Css ", isDone: true},
        {id: 2, title: "Js ", isDone: false},
        {id: 3, title: "React ", isDone: false},
        {id: 4, title: "Redux ", isDone: false},
    ]


    return (
        <div>
            <Todolist title={"What to learn"} tasks={tasks}/>
        </div>
    )
}