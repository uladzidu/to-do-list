import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

export type InputPropsType = {
    callback : (newTitle : string) => void
}

export function Input (props : InputPropsType) {

    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      setError(null)
        if (e.charCode === 13) {
            inputAddTask()
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError('');
        setTitle(e.currentTarget.value);
    }

    const inputAddTask = () => {
        const newTitle = title.trim()
        if (newTitle !== '') {
            props.callback(newTitle)
        } else {
            setError('Field is required')
        }
        setTitle('')
    }


    return (
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? 'error' : ''}
            />
            <button onClick={inputAddTask}>+</button>
            <div className={'error-message'}>{error}</div>
        </div>
    );
};

