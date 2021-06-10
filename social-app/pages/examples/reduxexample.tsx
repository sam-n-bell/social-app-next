import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { incrementCountAction } from "../../store/actions/counter";

const ReduceExample: React.FC = () => {
  const dispatch = useDispatch();

  const dispatchLogin = () => {
    console.log(typeof incrementCountAction);
    dispatch(incrementCountAction());
  };

  return (
    <>
      <span>Template Page</span>
      <Button variant="contained" color="primary" onClick={dispatchLogin}>
        Test Redux
      </Button>
    </>
  );
};

export default ReduceExample;
