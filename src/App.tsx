import React, {useState} from 'react';
import './App.css';
import {TasksPropsType, Todolist} from "./Todolist";
import {v1} from "uuid";


export type FilterValuesType = 'all' | 'completed' | 'active'
export type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

export function App() {

    let [tasks, setTasks] = useState<Array<TasksPropsType>>([
        {id: v1(), title: "HTML&Css ", isDone: true},
        {id: v1(), title: "Js ", isDone: false},
        {id: v1(), title: "React ", isDone: false},
        {id: v1(), title: "Redux ", isDone: false},
    ])

    let [todolists, setTodolist] = useState<Array<TodolistsType>>([
        {id: v1(), title: "What to learn ", filter: 'all'},
        {id: v1(), title: "What to buy ", filter: 'all'},
    ])


    function deleteTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }

    function addTask(title: string) {
        let newTask = {id: v1(), title: title, isDone: false}
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }

    function changeStatus(taskId: string, isDone: boolean) {
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }
        setTasks([...tasks])
    }

    function changeFilter(todolistId : string,value: FilterValuesType) {
        // setFilter(value)
        setTodolist(todolists.map((m) => m.id === todolistId ? {...m, filter : value} : m ))
    }

    let tasksForFilter = tasks;


    return (
        <div>
            {todolists.map((tl, index) => {
                if (tl.filter === "completed") {
                    tasksForFilter = tasks.filter(t => t.isDone)
                }
                if (tl.filter === "active") {
                    tasksForFilter = tasks.filter(t => !t.isDone)
                }
                return (

                    <Todolist
                        key={index}
                        todolistId={tl.id}
                        title={tl.title}
                        tasks={tasksForFilter}
                        deleteTask={deleteTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeStatus={changeStatus}
                        filter={tl.filter}
                    />
                )
            })}

        </div>
    )
}