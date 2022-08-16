import React, {ChangeEvent, memo} from 'react';
import {TaskType} from "../AppWithRedux";
import EditableInput from "./EditableInput";
import {useDispatch} from "react-redux";
import {changeCheckBoxStatusAC, editTaskSpanAC, removeTaskAC} from "../reducers/TasksReducer";

export type Task1PropsType = {
    todolistId : string
    task : TaskType
}

export const Task1 = memo((
    {
        todolistId,
        task

    }: Task1PropsType) => {
    console.log('Task1')
    const dispatch = useDispatch()

    const removeTaskHandler = () => {
        dispatch(removeTaskAC(todolistId,task.id))
    }
    const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeCheckBoxStatusAC(todolistId,task.id,e.currentTarget.checked))
    }
    const editTaskHandler = (newTitle: string) => {
        dispatch(editTaskSpanAC(todolistId,task.id,newTitle))
    }

    return (
        <li>
            <input type="checkbox" checked={task.isDone} onChange={onChangeCheckboxHandler}/>
            <EditableInput title={task.title}
                           callback={editTaskHandler}/>
            <button onClick={removeTaskHandler}>x</button>
        </li>
    )
})
