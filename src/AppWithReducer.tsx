import React, {useReducer, useState} from 'react';
import {v1} from "uuid";
import {Todolist} from "./Todolist";
import './App.css'
import Input from "./components/Input";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    editTodolistSpanAC,
    removeTodolistAC,
    TodolistReducer
} from "./reducers/TodolistReducer";
import {addTaskAC, changeCheckBoxStatusAC, editTaskSpanAC, removeTaskAC, TasksReducer} from "./reducers/TasksReducer";

export type FilterType = 'all' | 'active' | 'completed'
export type TodolistsType = {
    id: string
    title: string
    filter: FilterType
}
export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}
export type TasksStateType = {
    [key: string]: Array<TaskType>
}

export const AppWithReducer = () => {

    const todolistId1 = v1()
    const todolistId2 = v1()

    const [todolists, dispatchToTodolists] = useReducer( TodolistReducer, [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, dispatchToTasks] = useReducer(TasksReducer, {
        [todolistId1]: [
            {id: v1(), title: 'Html', isDone: true},
            {id: v1(), title: 'Css', isDone: true},
            {id: v1(), title: 'Js', isDone: false},
            {id: v1(), title: 'React', isDone: false},
        ],
        [todolistId2]: [
            {id: v1(), title: 'Milk', isDone: true},
            {id: v1(), title: 'Water', isDone: true},
            {id: v1(), title: 'Chocolate', isDone: false},
        ],
    })

    // todolist functions

    const removeTodolist = (todolistId: string) => {
        const action = removeTodolistAC(todolistId)
        dispatchToTodolists(action)
        dispatchToTasks(action)
    }
    const addTodolist = (newTitle: string) => {
        const action = addTodolistAC(newTitle)
        dispatchToTodolists(action)
        dispatchToTasks(action)
    }
    const editTodolistSpan = (todolistId : string, newTitle : string) => {
        const action = editTodolistSpanAC(todolistId,newTitle)
        dispatchToTodolists(action)
    }
    const changeFilter = (todolistId : string, filter : FilterType) => {
        const action = changeTodolistFilterAC(todolistId,filter)
        dispatchToTodolists(action)
    }

    // tasks functions

    const removeTask = (todolistId: string, taskId: string) => {
        let action = removeTaskAC(todolistId,taskId)
        dispatchToTasks(action)
    }
    const addTask = (todolistId: string, newTitle: string) => {
        const action = addTaskAC(todolistId,newTitle)
        dispatchToTasks(action)
    }
    const changeCheckBoxStatus = (todolistId: string, taskId : string, value : boolean) => {
        const action = changeCheckBoxStatusAC(todolistId,taskId,value)
        dispatchToTasks(action)
    }
    const editTaskSpan = (todolistId: string, taskId: string, newTitle: string) => {
        const action = editTaskSpanAC(todolistId,taskId,newTitle)
        dispatchToTasks(action)
    }



    return (
        <div className={'App'}>

            <Input callback={addTodolist}/>

            {todolists.map( (elem : TodolistsType) => {

                let resultedTasks = tasks[elem.id]

                if (elem.filter === 'active') {
                    resultedTasks = tasks[elem.id].filter(elem => !elem.isDone)
                }
                if (elem.filter === 'completed') {
                    resultedTasks = tasks[elem.id].filter(elem => elem.isDone)
                }

                return (

                    <Todolist
                        key={elem.id}
                        todolistId={elem.id}
                        todolists={todolists}
                        title={elem.title}
                        tasks={resultedTasks}
                        removeTask = {removeTask}
                        changeFilter = {changeFilter}
                        addTask = {addTask}
                        filter = {elem.filter}
                        removeTodolist = {removeTodolist}
                        changeCheckBoxStatus = {changeCheckBoxStatus}
                        addTodolist = {addTodolist}
                        editTaskSpan = {editTaskSpan}
                        editTodolistSpan = {editTodolistSpan}
                    />
                )
            })}
        </div>
    );
};
