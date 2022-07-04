import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";
import {Input} from "./components/Input";


export type FilterType = 'all' | 'active' | 'completed'
export type TodolistsPropsType = {
    id: string
    title: string
    filter: FilterType
}

export function App() {

    let todolistId1 = v1()
    let todolistId2 = v1()

    const [todolists, setTodolists] = useState<Array<TodolistsPropsType>>([
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistId1]: [
            {id: v1(), title: 'Css', isDone: true},
            {id: v1(), title: 'Js', isDone: true},
            {id: v1(), title: 'React', isDone: false},
        ],
        [todolistId2]: [
            {id: v1(), title: 'Css2', isDone: true},
            {id: v1(), title: 'Js2', isDone: true},
            {id: v1(), title: 'React2', isDone: false},
        ]
    })

    function removeTask(todolistId: string, taskId: string) {

        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(elem => elem.id !== taskId)})
    }

    function removeTodolist(todolistId : string) {

        setTodolists(todolists.filter( elem => elem.id !== todolistId ))
    }

    function changeFilter(todolistId: string, filterValue: FilterType) {

        setTodolists(todolists.map(elem =>

            elem.id === todolistId ? {...elem, filter: filterValue} : elem))

    }

    function addTask(todolistId: string, newTaskTitle: string) {

        const newTask = {id: v1(), title: newTaskTitle, isDone: false}

        setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]]})
    }

    function changeCheckBoxStatus(todolistId: string, taskId: string, isDone: boolean): void {

        const task = tasks[todolistId].find((elem: TaskType) =>
            elem.id === taskId
        )
        if (task) {
            task.isDone = isDone
        }
        setTasks({...tasks});
    }

    const addTodolist = (newTitle : string) => {

        const newTodolistId = v1()
        const newTodolist :TodolistsPropsType = {id: newTodolistId, title: newTitle, filter: 'all'}

        setTodolists([newTodolist,...todolists])
        setTasks({...tasks, [newTodolistId] : [] })
    }

    return (
        <div className={'App'}>

            <Input callback={ addTodolist }  />

            {todolists.map((elem) => {

                let filteredTasks = tasks[elem.id]

                if (elem.filter === 'completed') {
                    filteredTasks = tasks[elem.id].filter(elem => elem.isDone)
                }
                if (elem.filter === 'active') {
                    filteredTasks = tasks[elem.id].filter(elem => !elem.isDone)
                }

                return (
                    <Todolist
                        key={elem.id}
                        todolistId={elem.id}
                        title={elem.title}
                        filter={elem.filter}
                        tasks={filteredTasks}
                        removeTask={removeTask}
                        removeTodolist = {removeTodolist}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeCheckBoxStatus={changeCheckBoxStatus}
                    />
                )
            })}


        </div>

    )
}