import { ActionType } from "typesafe-actions";
import * as actions from "../actions/counter";
import { INCREMENT_COUNT } from "../constants/counter";


type Action = ActionType<typeof actions>;

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

export const counterReducer = (state: CounterState = initialState, action: Action): CounterState => {
    switch(action.type) {
        case INCREMENT_COUNT: {
            return {
                value: state.value + 1
            }
        }
        default: {
            return state;
        }
    }
}