import React, {memo, useCallback} from 'react';
import {FilterType, TaskType} from "./App";
import AddItemForm from "./components/AddItemForm";
import EditableInput from "./components/EditableInput";
import {Task} from "./components/Task";
import {Task1} from "./components/Task1";

export type TodolistPropsType = {
    todolistId: string
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistId: string, taskId: string) => void
    changeFilter: (todolistId: string, filter: FilterType) => void
    addTask: (todolistId: string, newTitle: string) => void
    filter: FilterType
    removeTodolist: (todolistId: string) => void
    changeCheckBoxStatus: (todolistId: string, taskId: string, value: boolean) => void
    addTodolist: (newTitle: string) => void
    editTaskTitle: (todolistId: string, taskId: string, newTitle: string) => void
    editTodolistTitle: (todolistId: string, newTitle: string) => void
}

export const Todolist = memo((props: TodolistPropsType) => {

    let tasks = [...props.tasks]

    if (props.filter === 'active') {
        tasks = tasks.filter(elem => !elem.isDone)
    }
    if (props.filter === 'completed') {
        tasks = tasks.filter(elem => elem.isDone)
    }

    const removeTask = useCallback((taskId: string) => {
        props.removeTask(props.todolistId, taskId)
    }, [props.removeTask, props.todolistId])

    const changeCheckBoxStatus = useCallback((taskId: string, value: boolean) => {
        props.changeCheckBoxStatus(props.todolistId, taskId, value)
    }, [props.changeCheckBoxStatus, props.todolistId])

    const editTaskTitle = useCallback((taskId: string, newTitle: string) => {
        props.editTaskTitle(props.todolistId, taskId, newTitle)
    }, [props.editTaskTitle, props.todolistId])

    const allFilterHandler = () => {
        props.changeFilter(props.todolistId, 'all')
    }
    const activeFilterHandler = () => {
        props.changeFilter(props.todolistId, 'active')
    }
    const completedFilterHandler = () => {
        props.changeFilter(props.todolistId, 'completed')
    }

    const addTaskHandler = useCallback((newTitle: string) => {
        props.addTask(props.todolistId, newTitle)
    }, [props.addTask, props.todolistId])
    const removeTodolistHandler = () => {
        props.removeTodolist(props.todolistId)
    }
    const editTodolistHandler = useCallback((newTitle: string) => {
        props.editTodolistTitle(props.todolistId, newTitle)
    } , [props.editTodolistTitle , props.todolistId] )

    const classNameForAll = props.filter === 'all' ? 'active' : ''
    const classNameForActive = props.filter === 'active' ? 'active' : ''
    const classNameForCompleted = props.filter === 'completed' ? 'active' : ''


    return (
        <div>
            <h3>
                <EditableInput title={props.title} callback={editTodolistHandler}/>
                <button onClick={removeTodolistHandler}>x</button>
            </h3>
            <AddItemForm
                callback={addTaskHandler}
            />
            <ul>
                {tasks.map((elem: TaskType) => {
                        // return (
                        //     <Task
                        //         key={elem.id}
                        //         task={elem}
                        //         removeTask={removeTask}
                        //         changeCheckBoxStatus={changeCheckBoxStatus}
                        //         editTaskTitle={editTaskTitle}
                        //     />
                        // )
                        return (
                            <Task1
                                key={elem.id}
                                todolistId={props.todolistId}
                                task={elem}
                            />
                        )

                    }
                )
                }


            </ul>

            <button className={classNameForAll} onClick={allFilterHandler}>All</button>
            <button className={classNameForActive} onClick={activeFilterHandler}>Active</button>
            <button className={classNameForCompleted} onClick={completedFilterHandler}>Completed</button>

        </div>
    );
})
