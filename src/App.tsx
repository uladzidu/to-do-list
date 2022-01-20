import React, {useState} from 'react';
import './App.css';
import {TasksPropsType, Todolist} from "./Todolist";


export type FilterPropsType = 'all' | 'completed' | 'active'

export function App() {

    let [tasks, setTasks] = useState<Array<TasksPropsType>>([
        {id: 1, title: "HTML&Css ", isDone: true},
        {id: 2, title: "Js ", isDone: false},
        {id: 3, title: "React ", isDone: false},
        {id: 4, title: "Redux ", isDone: false},
    ])
    let [filter, setFilter] = useState<FilterPropsType>('all')


    function deleteTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }

    let tasksForFilter = tasks;
    if (filter === "completed") {
        tasksForFilter = tasks.filter(t => t.isDone)
    }
    if (filter === "active") {
        tasksForFilter = tasks.filter(t => !t.isDone)
    }

    return (
        <div>
            <Todolist title={"What to learn"}
                      tasks={tasksForFilter}
                      deleteTask={deleteTask}
                      setFilter = {setFilter}
            />
        </div>
    )
}