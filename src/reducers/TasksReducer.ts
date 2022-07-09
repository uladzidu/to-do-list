import React from "react";

export const TasksReducer = (state : any, action: any  ) => {

    switch (action.type) {

        case 'XXX' : {
            return state
        }

        default: return state

    }
}

type removeTaskType = ReturnType<typeof removeTaskAC>

const removeTaskAC = () => {

    return {
        type : 'REMOVE TASK',
        payload : {}
    }

}