import React, {useCallback} from 'react';
import {Todolist} from "./Todolist";
import './App.css'

import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./reducers/store";
import {addTaskAC, changeCheckBoxStatusAC, editTaskSpanAC, removeTaskAC} from "./reducers/TasksReducer";
import {addTodolistAC, changeTodolistFilterAC, editTodolistSpanAC, removeTodolistAC} from "./reducers/TodolistReducer";
import AddItemForm from "./components/AddItemForm";


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

    const todolists = useSelector<AppRootStateType, TodolistsType[]>(state => state.todolists)
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)

    const dispatch = useDispatch()


    // todolist functions

    const removeTodolist = useCallback((todolistId: string) => {
        const action = removeTodolistAC(todolistId)
        dispatch(action)
    }, [dispatch] )

    const addTodolist = useCallback((newTitle: string) => {
        const action = addTodolistAC(newTitle)
        dispatch(action)
    }, [dispatch])

    const editTodolistSpan = useCallback((todolistId: string, newTitle: string) => {
        const action = editTodolistSpanAC(todolistId, newTitle)
        dispatch(action)
    }, [dispatch] )

    const changeFilter = useCallback((todolistId: string, filter: FilterType) => {
        const action = changeTodolistFilterAC(todolistId, filter)
        dispatch(action)
    }, [dispatch] )

    // tasks functions

    const removeTask = useCallback((todolistId: string, taskId: string) => {
        let action = removeTaskAC(todolistId, taskId)
        dispatch(action)
    }, [dispatch] )

    const addTask = useCallback((todolistId: string, newTitle: string) => {
        const action = addTaskAC(todolistId, newTitle)
        dispatch(action)
    }, [dispatch])

    const changeCheckBoxStatus = useCallback((todolistId: string, taskId: string, value: boolean) => {
        const action = changeCheckBoxStatusAC(todolistId, taskId, value)
        dispatch(action)
    }, [dispatch] )
    const editTaskSpan = useCallback((todolistId: string, taskId: string, newTitle: string) => {
        const action = editTaskSpanAC(todolistId, taskId, newTitle)
        dispatch(action)
    }, [dispatch]  )

    return (
        <div className={'App'}>

            <AddItemForm callback={addTodolist}/>

            {todolists.map((elem: TodolistsType) => {


                return (

                    <Todolist
                        key={elem.id}
                        todolistId={elem.id}
                        title={elem.title}
                        tasks={tasks[elem.id]}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        filter={elem.filter}
                        removeTodolist={removeTodolist}
                        changeCheckBoxStatus={changeCheckBoxStatus}
                        addTodolist={addTodolist}
                        editTaskTitle={editTaskSpan}
                        editTodolistTitle={editTodolistSpan}
                    />
                )
            })}
        </div>
    );
};
