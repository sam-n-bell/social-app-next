import { combineEpics } from "redux-observable";
import counterEpics from './counter';

const epics = combineEpics(
    ...counterEpics
)

export default epics;