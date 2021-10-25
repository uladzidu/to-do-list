//import { useState } from '@testing-library/react/node_modules/@types/react';
import React from 'react';
import './App.css';
import { ArrayType, Todolist } from './Todolist';
import { useState } from 'react';



export type filterValuesType = "all" | "completed" | "active";


function App() {

    let [tasks, setTasks] = useState([
        { id: 1, title: "HTML", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "React", isDone: false },
        { id: 4, title: "Redux", isDone: false },
        { id: 5, title: "Python", isDone: false },
    ])

    let [filter, setFilter] = useState<filterValuesType>("all");


    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }

    function changeFilter (value : filterValuesType) {
        setFilter(value);
    }



    let tasksForTodolist = tasks;

    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }


    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter = {changeFilter}
            />
        </div>
    );
}




export default App;
