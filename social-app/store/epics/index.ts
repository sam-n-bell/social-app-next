import { combineEpics } from "redux-observable";
import authEpics from './auth';
import counterEpics from './counter';

const epics = combineEpics(
    ...counterEpics,
    ...authEpics
)

export default epics;