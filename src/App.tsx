import React, {useState} from 'react';
import './App.css';
import {TasksPropsType, Todolist} from "./Todolist";
import {v1} from "uuid";


export type FilterValuesType = 'all' | 'completed' | 'active'

export function App() {

    let [tasks, setTasks] = useState<Array<TasksPropsType>>([
        {id: v1(), title: "HTML&Css ", isDone: true},
        {id: v1(), title: "Js ", isDone: false},
        {id: v1(), title: "React ", isDone: false},
        {id: v1(), title: "Redux ", isDone: false},
    ])

    let [filter, setFilter] = useState<FilterValuesType>('all')

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

    function changeFilter(value: FilterValuesType) {
        setFilter(value)
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
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeStatus={changeStatus}
                      filter={filter}
            />
        </div>
    )
}