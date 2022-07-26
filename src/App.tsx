import React, {useState} from 'react';
import {v1} from "uuid";
import {Todolist} from "./Todolist";
import './App.css'
import Input from "./components/Input";

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
export type TasksType = {
    [key: string]: Array<{ id: string, title: string, isDone: boolean }>
}

const App = () => {

    const todolistId1 = v1()
    const todolistId2 = v1()

    const [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TasksType>({
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


    const removeTodolist = (todolistId: string) => {
        setTodolists( [...todolists].filter(elem => elem.id !== todolistId) )
        delete tasks[todolistId]
    }
    const addTodolist = (newTitle: string) => {
        const newId = v1()
        const newTodolist : TodolistsType = {id: newId, title: newTitle, filter: 'all'}
        setTodolists([newTodolist,...todolists])
        setTasks({...tasks, [newId] : [] })
    }
    const editTodolistSpan = (todolistId : string, newTitle : string) => {
        setTodolists( todolists.map( elem => elem.id === todolistId ? {...elem, title : newTitle} : elem ))
    }
    const changeFilter = (todolistId : string, filter : FilterType) => {
        setTodolists(todolists.map( elem =>
            elem.id === todolistId ? {...elem, filter : filter} : elem ))
    }

    const removeTask = (todolistId: string, taskId: string) => {

        setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId].filter(elem =>
                elem.id !== taskId
            )
        })

    }
    const addTask = (todolistId: string, newTitle: string) => {
        const newTask: TaskType = {id: v1(), title: newTitle, isDone: false}
        setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]]})
    }
    const changeCheckBoxStatus = (todolistId: string, taskId : string, value : boolean) => {
        setTasks({...tasks, [todolistId] : tasks[todolistId].map(elem =>
                elem.id === taskId ? {...elem, isDone : value} : elem )  })
    }
    const editTaskSpan = (todolistId: string, taskId: string, newTitle: string) => {
        setTasks({
            ...tasks,
            [todolistId]: tasks[todolistId].map(elem =>
                elem.id === taskId ? {...elem, title: newTitle} : elem)
        })
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

export default App;