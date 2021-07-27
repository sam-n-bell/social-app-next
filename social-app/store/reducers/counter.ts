import { ActionType, getType } from "typesafe-actions";
import * as actions from "../actions/counter";


type Action = ActionType<typeof actions>;

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

export const counterReducer = (state: CounterState = initialState, action: Action): CounterState => {
    switch(action.type) {
        case getType(actions.incrementCountActionSuccess): {
            return {
                value: state.value + 1
            }
        }
        case getType(actions.incrementCountAction): {
            return state;
        }
        default: {
            return state;
        }
    }
}