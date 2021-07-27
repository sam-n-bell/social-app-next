import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, filter, mergeMap, switchMap } from "rxjs/operators";
import { ActionType, isActionOf } from "typesafe-actions";
import { login } from "../../services/auth";
import * as actions from "../actions/auth";
import { RootState } from "../reducers";

type Action = ActionType<typeof actions>;

export const loginEpic: Epic<Action, Action, RootState> = (action$) =>
  action$.pipe(
    filter(isActionOf(actions.login)),
    switchMap((action) => {
      const { email, password } = action.payload;
      return from(login(email, password)).pipe(
        mergeMap((data) => [actions.loginSuccess(data)])
      );
    }),
    catchError((error: any) => of(actions.loginFailure(error)))
  );

export default [loginEpic];
