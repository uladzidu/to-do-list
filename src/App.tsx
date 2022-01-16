import React from 'react';
import './App.css';
import {ArrayType, Todolist} from './Todolist';
import {useState} from 'react';
import {v1} from 'uuid';


export type FilterValuesType = 'all' | 'completed' | 'active'


function App() {
    let [tasks, setTasks] = useState<Array<ArrayType>>([
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'Redux', isDone: false},
        {id: v1(), title: 'Python', isDone: false},
    ])
    let [filter, setFilter] = useState<FilterValuesType>('all')


    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }

    function addTask(title : string) {
        let newAddedTask = {id: v1(), title: title, isDone: false}
        let addedTasks = [newAddedTask,...tasks]
        setTasks(addedTasks)
    }

    let tasksForToDoList = tasks;
    if (filter === 'completed') {
        tasksForToDoList = tasks.filter(t => t.isDone)
    }
    if (filter === 'active') {
        tasksForToDoList = tasks.filter(t => !t.isDone)
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasksForToDoList}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask = {addTask}
            />
        </div>
    );
}


export default App;
