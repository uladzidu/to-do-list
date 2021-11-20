//import { useState } from '@testing-library/react/node_modules/@types/react';
import React from 'react';
import './App.css';
import { ArrayType, Todolist } from './Todolist';
import { useState } from 'react';


function App() {

    let [tasks, setTasks] = useState([
        { id: 1, title: "HTML", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "React", isDone: false },
        { id: 4, title: "Redux", isDone: false },
        { id: 5, title: "Python", isDone: false },
    ])
    

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }


    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasks}
                removeTask={removeTask}
            />
        </div>
    );
}




export default App;
