import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterType = 'all' | 'active' | 'completed'

export function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: 'Css', isDone: true},
        {id: v1(), title: 'Js', isDone: true},
        {id: v1(), title: 'React', isDone: false},
    ])
    let [filter, setFilter] = useState<FilterType>('all')

    function removeTask(taskId : string) {
        let resultTasks = tasks.filter( elem => elem.id !== taskId )
        setTasks(resultTasks)
    }

    function changeFilter (filterValue : FilterType) {
        setFilter(filterValue)
    }

    function addTask (newTaskTitle : string) {
        const newTask = {id : v1(), title: newTaskTitle, isDone: false}
        setTasks([newTask, ...tasks])

    }

    function changeCheckBoxStatus(taskId : string, isDone : boolean): void {
        const task = tasks.find( (elem: TaskType) =>
            elem.id === taskId
         )
        if (task) {
            task.isDone = isDone
        }
        setTasks([...tasks]);
    }

    let filteredTasks = tasks

    if (filter === 'completed') {
        filteredTasks = tasks.filter(elem => elem.isDone)
    }
    if (filter === 'active') {
        filteredTasks = tasks.filter(elem => !elem.isDone)
    }


    return (
        <div className={'App'}>
            <Todolist title = {'What to learn'}
                      tasks = {filteredTasks}
                      removeTask = {removeTask}
                      changeFilter = {changeFilter}
                      filter = {filter}
                      addTask = {addTask}
                      changeCheckBoxStatus = {changeCheckBoxStatus}
            />

        </div>

    )
}

