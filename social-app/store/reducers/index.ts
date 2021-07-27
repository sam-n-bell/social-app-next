  
import { combineReducers } from 'redux';
import { authReducer, AuthState } from './auth';
import { counterReducer, CounterState } from './counter';



export type RootState = {
  counter: CounterState,
  auth: AuthState
};

const reducers = combineReducers({
  counter: counterReducer,
  auth: authReducer
});

export default reducers;