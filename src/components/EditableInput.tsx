import React, {ChangeEvent, memo, useState} from 'react';

export type EditableInputPropsType = {
    title : string
    callback : (newTitle : string) => void
}

const EditableInput = memo((props : EditableInputPropsType) => {
    console.log('EditableInput')
    const [title, setTitle] = useState(props.title)
    const [edit, setEdit] = useState(false)

    const addTask = () => {
        props.callback(title.trim())
    }

    const onDoubleClickHandler = () => {
        setEdit(!edit)
    }
    const onChangeHandler = (e : ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        addTask()
    }

    return (
            edit
            ? <input autoFocus
                     onBlur={onDoubleClickHandler}
                     value={title}
                     onChange={onChangeHandler}
                    />

            : <span onDoubleClick={onDoubleClickHandler}>{title}</span>
    );
})

export default EditableInput