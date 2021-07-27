import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/auth";
import { incrementCountAction } from "../../store/actions/counter";
import { RootState } from "../../store/reducers";
import { AuthState } from "../../store/reducers/auth";
import { CounterState } from "../../store/reducers/counter";

const ReduceExample: React.FC = () => {
  const dispatch = useDispatch();

  const counterState = useSelector<RootState, CounterState>(
    (state) => state.counter
  );
  const authState = useSelector<RootState, AuthState>((state) => state.auth);

  const dispatchLogin = () => {
    dispatch(login({ email: "one", password: "two" }));
  };

  const dispatchIncrement = () => {
    dispatch(incrementCountAction());
  };

  return (
    <>
      <span>
        Template Page {counterState.value} {typeof authState}
      </span>
      <Button variant="contained" color="primary" onClick={dispatchLogin}>
        Test Login Redux
      </Button>
      <Button variant="contained" color="primary" onClick={dispatchIncrement}>
        Test Increment Redux
      </Button>
    </>
  );
};

export default ReduceExample;
