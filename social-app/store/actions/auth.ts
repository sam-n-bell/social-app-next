import { createAction } from "typesafe-actions";
import { LoginResponse } from "../../types/auth";
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from "../constants/auth";

export const login = createAction(
  LOGIN,
  (resolve) => (params: {email: string, password: string}) => {
    return resolve(params)
}
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  resolve => (loginResponse: LoginResponse) => {
      return resolve(loginResponse)
  }
);

export const loginFailure = createAction(
    LOGIN_FAILURE,
    resolve => (error: Error) => {
        return resolve(error)
    }
  );
