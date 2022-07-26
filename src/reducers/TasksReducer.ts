import {TasksType} from "../App";

export const TasksReducer = (state : TasksType, action : any) : TasksType => {
    switch (action.type) {
        case 'REMOVE-TASK' : {
            return state
        }
        default : return state
    }
}

export const removeTaskAC = () => {
    return {

    }
}