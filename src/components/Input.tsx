import React, {ChangeEvent, useState} from 'react';

export type InputPropsType = {
    callback: (newTaskTitle : string) => void
}

export const Input = (props : InputPropsType) => {

    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<null|string>(null)

    const onChangeHandler = (e : ChangeEvent<HTMLInputElement>) => {setTitle(e.currentTarget.value); setError('')}
    const addTaskHandler = () => {
        if (title === '') {
            setError('Title is required')
        } else {
            props.callback(title) ;
            setTitle('');
        }
    }

    return (
        <div>
            <div>
                <input value={title} onChange={onChangeHandler}/>
                <button onClick={addTaskHandler}>+</button>
            </div>
            <div className={'Error'}>{error}</div>
        </div>

    );
};

export default Input;