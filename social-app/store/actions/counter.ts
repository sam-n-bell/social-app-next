import { createAction } from "typesafe-actions";
import { INCREMENT_COUNT } from "../constants/counter";

export const incrementCountAction = createAction(
  INCREMENT_COUNT,
  (resolve) => () => resolve()
);
