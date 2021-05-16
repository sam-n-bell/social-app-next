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

const LayoutExample: React.FC = () => {
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
    <Container>
      <Grid container spacing={8}>
        <Grid
          item
          xs={6}
          style={{ backgroundColor: "blue", height: "250px" }}
        ></Grid>
        <Grid
          item
          xs={6}
          style={{ backgroundColor: "grey", height: "250px" }}
        ></Grid>

        {/* Form two columns with next row*/}

        <Grid container>
          <Grid
            item
            xs={6}
            md={8}
            style={{ backgroundColor: "green", height: "50px" }}
          ></Grid>
          <Grid
            item
            xs={6}
            md={4}
            style={{ backgroundColor: "orange", height: "50px" }}
          ></Grid>
        </Grid>
      </Grid>
      {/* <Grid container spacing={3} className={classes.grid} justify="center">
        <Grid item className={classes.grid} xs={12}>
          <Paper className={classes.paper} square>
              <Grid item xs={6}>
                  <Paper className={classes.paperInner} square>Inner 1</Paper>
              </Grid>
              <Grid item xs={6}>
                  <Paper className={classes.paperInner} square>Inner 2</Paper>
              </Grid>
          </Paper>
        </Grid>
        {/* <Grid item className={classes.grid} xs={12} md={6}>
          <Paper className={classes.paper} square>2
          </Paper>
        </Grid> */}
      {/* </Grid> */}
    </Container>
  );
};

export default LayoutExample;
