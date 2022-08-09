import {TasksStateType, TaskType} from "../App";
import {v1} from "uuid";
import {AddTodolistAT, RemoveTodolistAT} from "./TodolistReducer";


type removeTaskACType = {
    type: 'REMOVE-TASK'
    todolistId: string
    taskId: string
}
type addTaskType = {
    type: 'ADD-TASK'
    todolistId: string
    newTitle: string
}
type changeCheckBoxStatusType = {
    type: 'CHANGE-CHECKBOX-STATUS',
    todolistId: string,
    taskId: string,
    value: boolean
}
type editTaskSpanAC = {
    type: 'EDIT-TASK-SPAN',
    todolistId: string
    taskId: string
    newTitle: string
}


export type allTasksReducersType =
    removeTaskACType
    | addTaskType
    | changeCheckBoxStatusType
    | editTaskSpanAC
    | AddTodolistAT
    | RemoveTodolistAT

const initState = {}

export const TasksReducer = (state: TasksStateType = initState, action: allTasksReducersType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK' :
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].filter((elem: TaskType) =>
                    elem.id !== action.taskId
                )
            }
        case 'ADD-TASK' :
            const newTask: TaskType = {id: v1(), title: action.newTitle, isDone: false}
            return {
                ...state,
                [action.todolistId]: [
                    newTask,
                    ...state[action.todolistId]
                ]
            }
        case "CHANGE-CHECKBOX-STATUS" :
            return {
                ...state, [action.todolistId]: state[action.todolistId].map((elem: TaskType) =>
                    elem.id === action.taskId ? {...elem, isDone: action.value} : elem)
            }
        case "EDIT-TASK-SPAN":
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map((elem: TaskType) =>
                    elem.id === action.taskId ? {...elem, title: action.newTitle} : elem)
            }
        case "ADD-TODOLIST":
            return {
                ...state,
                [action.todolistId] : []
            }
        case "REMOVE-TODOLIST":
            const copyState = {...state}
            delete copyState[action.todolistId]
            return copyState
        default :
            return state
    }
}

export const removeTaskAC = (todolistId: string, taskId: string): removeTaskACType => {
    return {
        type: 'REMOVE-TASK', todolistId, taskId
    } as const
}

export const addTaskAC = (todolistId: string, newTitle: string): addTaskType => {
    return {
        type: 'ADD-TASK', todolistId, newTitle
    } as const
}

export const changeCheckBoxStatusAC = (todolistId: string, taskId: string, value: boolean): changeCheckBoxStatusType => {
    return {
        type: 'CHANGE-CHECKBOX-STATUS', todolistId, taskId, value
    } as const
}

export const editTaskSpanAC = (todolistId: string, taskId: string, newTitle: string) => {
    return {
        type: 'EDIT-TASK-SPAN', todolistId, taskId, newTitle
    } as const
}