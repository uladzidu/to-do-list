import {FilterType, TodolistsType} from "../App";
import {v1} from "uuid";


export type RemoveTodolistAT = {
    type: 'REMOVE-TODOLIST'
    todolistId: string
}
export type AddTodolistAT = {
    type: 'ADD-TODOLIST'
    newTitle: string
    todolistId: string
}
export type EditTodolistSpanAT = {
    type: 'EDIT-TODOLIST-SPAN'
    id: string
    title: string
}
export type ChangeTodolistFilterAT = {
    type: 'CHANGE-TODOLIST-FILTER'
    id: string
    filter: FilterType
}

export type AllTodolistsATTypes = RemoveTodolistAT | AddTodolistAT | EditTodolistSpanAT | ChangeTodolistFilterAT

const initState: TodolistsType[] = []

export const TodolistReducer =
    (state = initState, action: AllTodolistsATTypes): Array<TodolistsType> => {
        switch (action.type) {
            case 'REMOVE-TODOLIST' :
                return state.filter(elem => elem.id !== action.todolistId)
            case 'ADD-TODOLIST' :
                const newTodolist: TodolistsType = {id: action.todolistId, title: action.newTitle, filter: 'all'}
                return [newTodolist, ...state]
            case "EDIT-TODOLIST-SPAN" :
                return state.map(elem => elem.id === action.id ? {...elem, title: action.title} : elem)
            case 'CHANGE-TODOLIST-FILTER' :
                return state.map(elem => elem.id === action.id ? {...elem, filter: action.filter} : elem)
            default :
                return state
        }
    }

export const removeTodolistAC = (todolistId : string) : RemoveTodolistAT => {
    return {
        type : 'REMOVE-TODOLIST',
        todolistId
    } as const
}
export const addTodolistAC = (newTitle : string) : AddTodolistAT => {
    return {
        type: 'ADD-TODOLIST',
        todolistId : v1(),
        newTitle: newTitle
    } as const
}
export const editTodolistSpanAC = (newId : string, newTitle : string) : EditTodolistSpanAT => {
    return {
        type: 'EDIT-TODOLIST-SPAN',
        id: newId,
        title: newTitle
    } as const
}
export const changeTodolistFilterAC = (newId: string, newFilter : FilterType) : ChangeTodolistFilterAT => {
    return {
        type: 'CHANGE-TODOLIST-FILTER' ,
        id: newId,
        filter: newFilter
    } as const
}