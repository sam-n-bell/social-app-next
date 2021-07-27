import { createAction } from "typesafe-actions";
import { INCREMENT_COUNT, INCREMENT_COUNT_SUCCESS } from "../constants/counter";

export const incrementCountAction = createAction(
  INCREMENT_COUNT
);

export const incrementCountActionSuccess = createAction(
  INCREMENT_COUNT_SUCCESS
);
