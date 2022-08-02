import {AddTodolistAC, RemoveTodolistAC, TodolistReducer} from "./TodolistReducer";
import {TasksReducer} from "./TasksReducer";
import {TasksStateType, TodolistsType} from "../App";
import {v1} from "uuid";

test('ids should be equal', () => {

    const startTaskState: TasksStateType = {}
    const startTodolistsState: Array<TodolistsType> = []

    const action = AddTodolistAC('new todolist')

    const endTaskState = TasksReducer(startTaskState, action)
    // { ['сгенерировааный ключ'] : [] }
    const endTodolistState = TodolistReducer(startTodolistsState, action)
    // [ { id : 'сгенерировааный ключ' , title : 'new todolist', filter : 'all' } ]

    const keys = Object.keys(endTaskState)
    const idFromTasks = keys[0]
    const idFromTodolists = endTodolistState[0].id

    expect(idFromTasks).toBe(action.todolistId)
    expect(idFromTodolists).toBe(action.todolistId)

})

test('property with todolistId should be deleted', () => {

    const startState: TasksStateType = {
        'todolistId1': [
            {id: v1(), title: 'Html', isDone: true},
            {id: v1(), title: 'Css', isDone: true},
            {id: v1(), title: 'Js', isDone: false},
            {id: v1(), title: 'React', isDone: false},
        ],
        'todolistId2': [
            {id: v1(), title: 'Milk', isDone: true},
            {id: v1(), title: 'Water', isDone: true},
            {id: v1(), title: 'Chocolate', isDone: false},
        ],
    }

    const action = RemoveTodolistAC('todolistId2')

    const endState = TasksReducer(startState, action)

    const keys = Object.keys(endState)

    expect(keys.length).toBe(1)
    expect(endState['todolistId2']).not.toBeDefined()

})

