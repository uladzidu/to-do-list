import {Dispatch} from "redux";
import {setIsLoggedInAC} from "../auth/authReducer";
import {authApi} from "../api/todolists-api";
import {handleServerNetworkError} from "../utils/error-utils";
import axios from "axios";

const initialState: InitialStateType = {
    email : null as null | string,
    status: 'idle',
    error: null,
    isInitialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case "APP/SET-IS-INITIALIZED":
            return {...state, isInitialized : action.value}
        case "APP/SET-EMAIL":
            return {
                ...state,
                email: action.email
            }
        default:
            return {...state}
    }
}

// Actions
export const setEmailAC = (email: string | null) =>
    ({type: 'APP/SET-EMAIL', email} as const)
export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setAppIsInitializedAC = (value: boolean) => ({type: 'APP/SET-IS-INITIALIZED', value} as const)

// Thunk
export const initializeAppTC = () => async (dispatch: Dispatch) => {
    try {
        const response = await authApi.me()
        if (response.data.resultCode === 0) {
            dispatch(setEmailAC(response.data.data.email))
            dispatch(setIsLoggedInAC(true));
            dispatch(setAppIsInitializedAC(true))
        } else {
            // handleServerAppError(response.data, dispatch)
        }
    } catch (e) {
        if (axios.isAxiosError(e)) {
            handleServerNetworkError(e, dispatch)
        }
    }
    finally {
        dispatch(setAppIsInitializedAC(true))
    }
}



export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
    // происходит ли сейчас взаимодействие с сервером
    status: RequestStatusType
    // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
    error: string | null
    isInitialized: boolean
    email : string | null
}
export type AppActionsType =
    | SetAppErrorActionType
    | SetAppStatusActionType
    | ReturnType<typeof setAppIsInitializedAC>
    | ReturnType<typeof setEmailAC>
