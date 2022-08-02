import {v1} from "uuid";
import {TodolistsType} from "../App";
import {
    AddTodolistAC,
    ChangeTodolistFilterAC,
    EditTodolistSpanAC,
    RemoveTodolistAC,
    TodolistReducer
} from "./TodolistReducer";

test('correct todolist should be remove' , () => {

    const todolistId1 = v1()
    const todolistId2 = v1()

    const newTodolistTitle = 'newTodolistTitle'
    const newId = v1()

    const defaultState = <Array<TodolistsType>>[
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'},
    ]

    const rsTodolist = TodolistReducer(defaultState, RemoveTodolistAC (todolistId2)  )
    const rsAddTodolist = TodolistReducer(defaultState, AddTodolistAC(newId , newTodolistTitle) )
    const rsEditTodolistTitle = TodolistReducer(defaultState, EditTodolistSpanAC( newId , newTodolistTitle ) )
    const rsChangedFilter = TodolistReducer(defaultState, ChangeTodolistFilterAC(todolistId1, 'completed') )

    // remove-todolist tests
    expect(rsTodolist.length).toBe(1)
    expect(rsTodolist[0].title).toBe('What to learn')

    // add-todolists test
    expect(rsAddTodolist.length).toBe(3)
    expect(rsAddTodolist[0].title).toBe('newTodolistTitle')

    //EDIT-TODOLIST-SPAN test
    expect(rsEditTodolistTitle[0].title).toBe('What to learn')
    expect(rsEditTodolistTitle[1].title).toBe('What to buy')
    // CHANGE-TODOLIST-FILTER
    expect(rsChangedFilter[0].title).toBe('What to learn')
    expect(rsChangedFilter[0].filter).toBe('completed')


} )

