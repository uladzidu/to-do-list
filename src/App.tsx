import React, {useState} from 'react';
import './App.css';
import {TasksPropsType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}
export type FilterValuesType = 'all' | 'completed' | 'active'

export function App() {

    let todolistId1 = v1()
    let todolistId2 = v1()

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ])

    let [tasks, setTasks] = useState({

        [todolistId1]: [
            {id: v1(), title: "HTML&Css ", isDone: true},
            {id: v1(), title: "Js ", isDone: false},
            {id: v1(), title: "React ", isDone: false},
            {id: v1(), title: "Redux ", isDone: false}
        ],
        [todolistId2]: [
            {id: v1(), title: "HTML&Css2 ", isDone: true},
            {id: v1(), title: "Js2 ", isDone: false},
            {id: v1(), title: "React2 ", isDone: false},
            {id: v1(), title: "Redux2 ", isDone: false}
        ]
    })

     let [filter, setFilter] = useState<FilterValuesType>('all')

    function deleteTask(todolistId : string, id: string) {
        setTasks({...tasks,[todolistId]: tasks[todolistId].filter(filter => filter.id != id)} )
    }

    function addTask(todolistId : string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false}
        setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]] } )
    }

    function changeStatus(todolistId : string, taskId: string, isDone: boolean) {
        let task = tasks[todolistId].find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }
        setTasks({...tasks})
    }

    function changeFilter(todolistId : string ,value: FilterValuesType) {
        setTodolists(todolists.map(filtered => filtered.id === todolistId ? {...filtered , filter: value} : filtered ))
    }


    return (
        <div className='App'>
            {todolists.map((todolistMap) => {

                let tasksForFilter = tasks[todolistMap.id]

                if (todolistMap.filter === "completed") {
                    tasksForFilter = tasks[todolistMap.id].filter(t => t.isDone)
                }
                if (todolistMap.filter === "active") {
                    tasksForFilter = tasks[todolistMap.id].filter(t => !t.isDone)
                }
                return (
                    <Todolist
                        key={todolistMap.id}
                        todolistId={todolistMap.id}
                        title={todolistMap.title}
                        tasks={tasksForFilter}
                        deleteTask={deleteTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeStatus={changeStatus}
                        filter={todolistMap.filter}
                    />
                )
            })}

        </div>
    )
}