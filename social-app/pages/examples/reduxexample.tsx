import { Button } from "@material-ui/core";
import React from "react";
// import { useDispatch } from "react-redux";
// import { weatherGetAction } from "../../store/actions";

const ReduceExample: React.FC = () => {
  // const dispatch = useDispatch();

  // const dispatchLogin = () => {
  //   dispatch(weatherGetAction(722, 354));
  // };

  return (
    <>
      <span>Template Page</span>
      <Button variant="contained" color="primary">
        Test Redux
      </Button>
    </>
  );
};

export default ReduceExample;
