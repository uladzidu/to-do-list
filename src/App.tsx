import React from 'react';
import './App.css';
import {taskPropsType, Todolist} from "./Todolist";


export function App() {

    let tasks1: Array<taskPropsType>  = [
        {id: 1, title: "Css", isDone: true},
        {id: 2, title: "Js", isDone: false},
        {id: 3, title: "React", isDone: false},
    ]

    let tasks2: Array<taskPropsType> = [
        {id: 1, title: "Movie 1", isDone: true},
        {id: 2, title: "Movie 2", isDone: false},
        {id: 3, title: "Movie 3", isDone: true},
    ]


    return (
        <div>
            <Todolist title={"What to learn"} tasks={tasks1}/>
            <Todolist title={"Movies"} tasks={tasks2}/>

        </div>
    )
}