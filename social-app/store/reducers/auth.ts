import { ActionType, getType } from "typesafe-actions";
import * as actions from "../actions/auth";
// import {LoginResponse} from '../../types/auth';


type Action = ActionType<typeof actions>;

export interface AuthState {
    token: string | null
    authenticated: boolean
    errorMessage: string | null
}

const initialState: AuthState = {
    token: null,
    authenticated: false,
    errorMessage: null
}

export const authReducer = (state: AuthState = initialState, action: Action): AuthState => {
    switch(action.type) {
        case getType(actions.login): {
            console.log("login")
            return {
                token: null,
                authenticated: false,
                errorMessage: null
            }
        }
        case getType(actions.loginSuccess): {
            console.log("success")
            return {
                token: action.payload.token,
                authenticated: true,
                errorMessage: null
            }
        }
        case getType(actions.loginFailure): {
            console.log("error")
            return {
                token: null,
                authenticated: false,
                errorMessage: "broke"
            }
        }
        default: {
            return state;
        }
    }
}