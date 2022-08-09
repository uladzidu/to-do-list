import React from 'react';
import {v1} from "uuid";
import {Todolist} from "./Todolist";
import './App.css'
import Input from "./components/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./reducers/store";
import {addTaskAC, changeCheckBoxStatusAC, editTaskSpanAC, removeTaskAC} from "./reducers/TasksReducer";
import {addTodolistAC, changeTodolistFilterAC, editTodolistSpanAC, removeTodolistAC} from "./reducers/TodolistReducer";

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

export const AppWithRedux = () => {

    const todolistId1 = v1()
    const todolistId2 = v1()

    const todolists = useSelector<AppRootStateType,TodolistsType[]>(state => state.todolists)
    const tasks = useSelector<AppRootStateType,TasksStateType>(state => state.tasks)

    const dispatch = useDispatch()


    // todolist functions

    const removeTodolist = (todolistId: string) => {
        const action = removeTodolistAC(todolistId)
        dispatch(action)
    }
    const addTodolist = (newTitle: string) => {
        const action = addTodolistAC(newTitle)
        dispatch(action)
    }
    const editTodolistSpan = (todolistId : string, newTitle : string) => {
        const action = editTodolistSpanAC(todolistId,newTitle)
        dispatch(action)
    }
    const changeFilter = (todolistId : string, filter : FilterType) => {
        const action = changeTodolistFilterAC(todolistId,filter)
        dispatch(action)
    }

    // tasks functions

    const removeTask = (todolistId: string, taskId: string) => {
        let action = removeTaskAC(todolistId,taskId)
        dispatch(action)
    }
    const addTask = (todolistId: string, newTitle: string) => {
        const action = addTaskAC(todolistId,newTitle)
        dispatch(action)
    }
    const changeCheckBoxStatus = (todolistId: string, taskId : string, value : boolean) => {
        const action = changeCheckBoxStatusAC(todolistId,taskId,value)
        dispatch(action)
    }
    const editTaskSpan = (todolistId: string, taskId: string, newTitle: string) => {
        const action = editTaskSpanAC(todolistId,taskId,newTitle)
        dispatch(action)
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
