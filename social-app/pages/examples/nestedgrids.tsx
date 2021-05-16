import React from "react";
import {
  Avatar,
  Container,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Theme,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const NestedGrids: React.FC = () => {
  const useStyles = makeStyles((theme: Theme) => ({
    grid: {
      width: "100%",
    },
    paper: {
      backgroundColor: theme.palette.primary.light,
      width: "100%",
      padding: 10,
      textAlign: "center",
    },
    paperInner: {
      backgroundColor: theme.palette.secondary.light,
      width: "100%",
      margin: 10,
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} className={classes.grid} justify="center">
        <Grid item className={classes.grid} xs={12}>
          <Paper className={classes.paper} square>
              <Grid container>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paperInner} square>Inner 1</Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paperInner} square>Inner 2</Paper>
                </Grid>
              </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default NestedGrids;
