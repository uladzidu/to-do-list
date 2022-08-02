import {addTaskAC, changeCheckBoxStatusAC, editTaskSpanAC, removeTaskAC, TasksReducer} from "./TasksReducer";
import {TasksStateType} from "../App";
import {AddTodolistAC} from "./TodolistReducer";

test('Tasks test' , () => {

    const defaultState : TasksStateType = {
        'todolistId1': [
            {id: '1', title: 'Html', isDone: true},
            {id: '2', title: 'Css', isDone: true},
            {id: '3', title: 'Js', isDone: false},
            {id: '4', title: 'React', isDone: false},
        ],
        'todolistId2': [
            {id: '5', title: 'Milk', isDone: true},
            {id: '6', title: 'Water', isDone: true},
            {id: '7', title: 'Chocolate', isDone: false},
        ],
    }



    // resultState = rs

    // RemoveTask Test
    const removeTaskAction = removeTaskAC('todolistId1','2')
    const rsRemoveTask = TasksReducer(defaultState, removeTaskAction)

    expect(rsRemoveTask['todolistId1'].length).toBe(3)

    // AddTask Test
    const addTaskAction = addTaskAC('todolistId2','helooo')
    const rsAddTask = TasksReducer(defaultState,addTaskAction)

    expect(rsAddTask['todolistId2'].length).toBe(4)
    expect(rsAddTask['todolistId2'][0].title).toBe('helooo')

    // changeCheckboxStatus
    const changeStatusAction = changeCheckBoxStatusAC('todolistId2','7',true)
    const rsChangeStatus = TasksReducer(defaultState, changeStatusAction)

    expect(rsChangeStatus['todolistId2'][0].isDone).toBe(true)
    expect(rsChangeStatus['todolistId2'][0].title).toBe('Milk')
    expect(rsChangeStatus['todolistId2'][2].isDone).toBe(true)

    // edit task span
    const EditTaskSpanAction = editTaskSpanAC ('todolistId2', '5', 'Milkeee')
    const rsEditTaskSpan = TasksReducer(defaultState, EditTaskSpanAction)

    expect(rsEditTaskSpan['todolistId2'][0].title).toBe('Milkeee')

} )

test('new array should be added, when new todolist was added' , () => {

    const defaultState : TasksStateType = {
        'todolistId1': [
            {id: '1', title: 'Html', isDone: true},
            {id: '2', title: 'Css', isDone: true},
            {id: '3', title: 'Js', isDone: false},
            {id: '4', title: 'React', isDone: false},
        ],
        'todolistId2': [
            {id: '5', title: 'Milk', isDone: true},
            {id: '6', title: 'Water', isDone: true},
            {id: '7', title: 'Chocolate', isDone: false},
        ],
    }

    const action = AddTodolistAC('newTodolist')

    const endState = TasksReducer(defaultState , action)

    const keys = Object.keys(endState)
    const newKey = keys.find( elem => elem !== 'todolistId1' && elem !== 'todolistId2' )
    if (!newKey) {
        throw Error ('new key should be added')
    }

    expect(keys.length).toBe(3)
    expect(endState[newKey]).toEqual([])

    expect({}).toEqual({})

}  )