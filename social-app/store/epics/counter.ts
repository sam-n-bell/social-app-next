import { Epic } from "redux-observable";
import { filter, map } from 'rxjs/operators';
import { ActionType, isActionOf } from "typesafe-actions";
import * as actions from "../actions/counter";
import { RootState } from "../reducers";


type Action = ActionType<typeof actions>;

export const incrementEpic: Epic<Action, Action, RootState> = action$ =>
    action$.pipe(
        filter(isActionOf(actions.incrementCountAction)),
        map(actions.incrementCountActionSuccess)
    )

export default [incrementEpic]