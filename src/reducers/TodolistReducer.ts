import {FilterType, TodolistsType} from "../App";


type RemoveTodolistAT = {
    type: 'REMOVE-TODOLIST'
    id: string
}
type AddTodolistAT = {
    type: 'ADD-TODOLIST'
    newTitle: string
    id: string
}
type EditTodolistSpanAT = {
    type: 'EDIT-TODOLIST-SPAN'
    id: string
    title: string
}
type ChangeTodolistFilterAT = {
    type: 'CHANGE-TODOLIST-FILTER'
    id: string
    filter: FilterType
}



export type AllTodolistsATTypes = RemoveTodolistAT | AddTodolistAT | EditTodolistSpanAT | ChangeTodolistFilterAT


export const todolistReducer =
    (state: Array<TodolistsType>, action: AllTodolistsATTypes): Array<TodolistsType> => {

        switch (action.type) {
            case 'REMOVE-TODOLIST' :
                return state.filter(elem => elem.id !== action.id)
            case 'ADD-TODOLIST' :
                const newTodolist: TodolistsType = {id: action.id, title: action.newTitle, filter: 'all'}
                return [newTodolist, ...state]
            case "EDIT-TODOLIST-SPAN" :
                return state.map(elem => elem.id === action.id ? {...elem, title: action.title} : elem)
            case 'CHANGE-TODOLIST-FILTER' :
                return state.map(elem => elem.id === action.id ? {...elem, filter: action.filter} : elem)
            default :
                return state
        }
    }

export const RemoveTodolistAC = (id : string) : RemoveTodolistAT => {
    return {
        type : 'REMOVE-TODOLIST',
        id : id
    }
}
export const AddTodolistAC = (newId : string , newTitle : string) : AddTodolistAT => {
    return {
        type: 'ADD-TODOLIST',
        id: newId,
        newTitle: newTitle
    }
}
export const EditTodolistSpanAC = (newId : string, newTitle : string) : EditTodolistSpanAT => {
    return {
        type: 'EDIT-TODOLIST-SPAN',
        id: newId,
        title: newTitle
    }
}
export const ChangeTodolistFilterAC = (newId: string, newFilter : FilterType) : ChangeTodolistFilterAT => {
    return {
        type: 'CHANGE-TODOLIST-FILTER' ,
        id: newId,
        filter: newFilter
    }
}