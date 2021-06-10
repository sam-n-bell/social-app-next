  
import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { ActionType } from 'typesafe-actions';
import actions from './actions';
import epics from './epics';
import reducers, { RootState } from './reducers';




type Action = ActionType<typeof actions>;

console.log(typeof actions)

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
    }
  }

  const composeEnhancers = compose;


  const epicMiddleware = createEpicMiddleware<Action, Action, RootState>();


  const configureStore = (initialState?: RootState) => {
    const middlewares = [epicMiddleware];
    const enhancer = composeEnhancers(applyMiddleware(...middlewares));
    return createStore(reducers, initialState, enhancer);
  };
  
  const store = configureStore();
  
  epicMiddleware.run(epics);
  
  export default store;