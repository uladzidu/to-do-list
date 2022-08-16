import React, {ChangeEvent, memo} from 'react';
import {TaskType} from "../AppWithRedux";
import EditableInput from "./EditableInput";

export type TaskPropsType = {
    task: TaskType
    removeTask: (taskId: string) => void
    changeCheckBoxStatus: (taskId: string, value: boolean) => void
    editTaskTitle: (taskId: string, newTitle: string) => void
}

export const Task = memo((
    {
        task, removeTask, changeCheckBoxStatus, editTaskTitle
    }: TaskPropsType) => {

    console.log('task')

    const removeTaskHandler = () => {
        removeTask(task.id)
    }
    const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeCheckBoxStatus(task.id, e.currentTarget.checked)
    }
    const editTaskHandler = (newTitle: string) => {
        editTaskTitle(task.id, newTitle)
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
