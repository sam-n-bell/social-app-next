import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCountAction } from "../../store/actions/counter";
import { RootState } from "../../store/reducers";
import { CounterState } from "../../store/reducers/counter";

const ReduceExample: React.FC = () => {
  const dispatch = useDispatch();

  const counterState = useSelector<RootState, CounterState>(
    (state) => state.counter
  );

  const dispatchLogin = () => {
    dispatch(incrementCountAction());
  };

  return (
    <>
      <span>Template Page {counterState.value}</span>
      <Button variant="contained" color="primary" onClick={dispatchLogin}>
        Test Redux
      </Button>
    </>
  );
};

export default ReduceExample;
