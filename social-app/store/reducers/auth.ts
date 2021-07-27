import { ActionType, getType } from "typesafe-actions";
import * as actions from "../actions/auth";

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
            return {
                token: null,
                authenticated: false,
                errorMessage: null
            }
        }
        case getType(actions.loginSuccess): {
            return {
                token: action.payload.token,
                authenticated: true,
                errorMessage: null
            }
        }
        case getType(actions.loginFailure): {
            return {
                token: null,
                authenticated: false,
                // supposedly how to get message from an Error()
                errorMessage: action.payload.message
            }
        }
        default: {
            return state;
        }
    }
}