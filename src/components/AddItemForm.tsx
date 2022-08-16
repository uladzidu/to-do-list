import React, {ChangeEvent, memo, useState} from 'react';

export type InputPropsType = {
    callback: (newTaskTitle: string) => void
}

const AddItemForm = memo((props: InputPropsType) => {

        const [title, setTitle] = useState<string>('')
        const [error, setError] = useState<null | string>(null)

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setTitle(e.currentTarget.value);
            setError('')
        }
        const addTaskHandler = () => {
            if (title.trim() === '') {
                setError('Title is required')
            } else {
                props.callback(title.trim());
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
    }
)

export default AddItemForm