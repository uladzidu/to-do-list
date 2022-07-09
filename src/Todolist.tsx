import React, {ChangeEvent} from 'react';
import {FilterType, TaskType, TodolistsType} from "./App";
import Input from "./components/Input";
import {EditableInput} from "./components/EditableInput";

export type TodolistPropsType = {
    todolistId: string
    todolists: TodolistsType[]
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistId: string, taskId: string) => void
    changeFilter: (todolistId: string, filter: FilterType) => void
    addTask: (todolistId : string, newTitle : string) => void
    filter : FilterType
    removeTodolist : (todolistId: string) => void
    changeCheckBoxStatus : (todolistId: string, taskId : string, value : boolean) => void
    addTodolist : (newTitle : string) => void
    editTaskSpan: (todolistId: string, taskId: string, newTitle: string) => void
    editTodolistSpan : (todolistId : string, newTitle : string) => void
}

export const Todolist = (props: TodolistPropsType) => {

    const allFilterHandler = () => {props.changeFilter(props.todolistId, 'all')}
    const activeFilterHandler = () => {props.changeFilter(props.todolistId, 'active')}
    const completedFilterHandler = () => {props.changeFilter(props.todolistId, 'completed')}

    const addTodolistHandler =  (newTitle : string) => {props.addTask(props.todolistId,newTitle)}
    const removeTodolistHandler = () => {props.removeTodolist(props.todolistId)}

    const editTodolistHandler = (newTitle : string) => {props.editTodolistSpan(props.todolistId, newTitle)}

    const classNameForAll = props.filter === 'all' ? 'active' : ''
    const classNameForActive = props.filter === 'active' ? 'active' : ''
    const classNameForCompleted = props.filter === 'completed' ? 'active' : ''


    return (
        <div>
            <h3>
                <EditableInput title={props.title}  callback={ editTodolistHandler }/>
                <button onClick={removeTodolistHandler}>x</button>
            </h3>
            <Input
                callback={ addTodolistHandler }
            />
            <ul>
                {props.tasks.map((elem: TaskType) => {

                        const removeTaskHandler = () => {props.removeTask(props.todolistId, elem.id)}
                        const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeCheckBoxStatus(props.todolistId, elem.id, e.currentTarget.checked)
                        }
                        const editTaskHandler = (newTitle : string) => {props.editTaskSpan(props.todolistId,elem.id,newTitle)}

                        return (
                            <li key={elem.id}>
                                <input type="checkbox" checked={elem.isDone} onChange={onChangeCheckboxHandler}/>
                                <EditableInput title={elem.title}
                                               callback = {editTaskHandler}/>
                                <button onClick={removeTaskHandler}>x</button>
                            </li>
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
};
