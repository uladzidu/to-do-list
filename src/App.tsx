import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";


export type FilterValuesType = 'all' | 'completed' | 'active'
export type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

export function App() {

    let todolistId1 = v1()
    let todolistId2 = v1()


    let [tasks, setTasks] = useState({
        [todolistId1]: [
            {id: v1(), title: "HTML&Css ", isDone: true},
            {id: v1(), title: "Js ", isDone: false},
            {id: v1(), title: "React ", isDone: false},
            {id: v1(), title: "Redux ", isDone: false},
        ],
        [todolistId2]: [
            {id: v1(), title: "HTML&Css ", isDone: true},
            {id: v1(), title: "Js ", isDone: false},
            {id: v1(), title: "React ", isDone: false},
            {id: v1(), title: "Redux ", isDone: false},
        ]
    })

    let [todolists, setTodolist] = useState<Array<TodolistsType>>([
        {id: todolistId1, title: "What to learn ", filter: 'all'},
        {id: todolistId2, title: "What to buy ", filter: 'all'},
    ])


    function deleteTask(id: string) {
        // let filteredTasks = tasks(t => t.id !== id)
        // setTasks(filteredTasks)
    }

    function addTask(title: string) {
        // let newTask = {id: v1(), title: title, isDone: false}
        // let newTasks = [newTask, ...tasks]
        // setTasks(newTasks)
    }

    function changeStatus(taskId: string, isDone: boolean) {
        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }
        // setTasks([...tasks])
    }

    function changeFilter(todolistId: string, value: FilterValuesType) {
        // setFilter(value)
        setTodolist(todolists.map(m => m.id === todolistId ? {...m, filter: value} : m))
    }


    return (
        <div className={'App'}>
            {todolists.map((tl, index) => {
                let tasksForFilter = tasks[tl.filter]
                if (tl.filter === "completed") {
                    tasksForFilter = tasks[tl.id].filter(t => t.isDone)
                }
                if (tl.filter === "active") {
                    tasksForFilter = tasks[tl.id].filter(t => !t.isDone)
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