import {v1} from "uuid";
import {TodolistsType} from "../App";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    editTodolistSpanAC,
    removeTodolistAC,
    TodolistReducer
} from "./TodolistReducer";

let todolistId1: string
let todolistId2: string
let newId : string
let newTodolistTitle : string

let defaultState : Array<TodolistsType>

beforeEach(() => {

    todolistId1 = v1()
    todolistId2 = v1()

    newTodolistTitle = 'newTodolistTitle'
    newId = v1()

    defaultState = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'},
    ]
})


test('correct todolist should be remove', () => {

    // remove-todolist tests
    const rsTodolist = TodolistReducer(defaultState, removeTodolistAC(todolistId2))
    expect(rsTodolist.length).toBe(1)
    expect(rsTodolist[0].title).toBe('What to learn')

})

test('add new todolist', () => {

    // add-todolists test
    const rsAddTodolist = TodolistReducer(defaultState, addTodolistAC(newTodolistTitle))
    expect(rsAddTodolist.length).toBe(3)
    expect(rsAddTodolist[0].title).toBe('newTodolistTitle')

})

test('edit todolist text', () => {

    //EDIT-TODOLIST-SPAN test
    const rsEditTodolistTitle = TodolistReducer(defaultState, editTodolistSpanAC(newId, newTodolistTitle))
    expect(rsEditTodolistTitle[0].title).toBe('What to learn')
    expect(rsEditTodolistTitle[1].title).toBe('What to buy')

})

test('change todolist filter', () => {

    // CHANGE-TODOLIST-FILTER
    const rsChangedFilter = TodolistReducer(defaultState, changeTodolistFilterAC(todolistId1, 'completed'))
    expect(rsChangedFilter[0].title).toBe('What to learn')
    expect(rsChangedFilter[0].filter).toBe('completed')

})

