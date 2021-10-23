import React from 'react';
import './App.css';
import { ArrayType, Todolist }  from './Todolist';

function App() {

let tasks : Array<ArrayType> = [
    {id : 1 , title : "HTML", isDone : true },
    {id : 2 , title : "JS", isDone : true },
    {id : 3 , title : "React", isDone : false },
    {id : 4 , title : "Redux", isDone : false },
    {id : 5 , title : "Python", isDone : false },
]

function removeTask (id : number) {
    debugger
    let resultTasks = tasks.filter( (t) => {
        if (t.id !== id ) {
            return true;
        } else {
            return false;
        }
    }  )
}


    return (
        <div className="App">
            <Todolist 
            title = "What to learn" 
            tasks = {tasks} 
            removeTask = {removeTask} 
            />
        </div>
    );
}




export default App;
