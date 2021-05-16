import React from "react";
import {
  Avatar,
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Theme,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const Profile: React.FC = () => {
  const useStyles = makeStyles((theme: Theme) => ({
    fullWidth: {
      width: "100%",
    },
    paper: {
      padding: 10
    },
    nestedContainer: {
      margin: 5,
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.fullWidth} style={{ padding: 20 }}>
        <Paper
          className={`${classes.paper} ${classes.fullWidth}`}
          style={{ backgroundColor: "#f5f5f5" }}
        >
          {/* <Paper
            className={`${classes.fullWidth}`}
            style={{ backgroundColor: "#fafafa",}}
          > */}
            <Grid
              container
              className={`${classes.nestedContainer} ${classes.fullWidth}`}
              spacing={5}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  className={classes.fullWidth}
                  variant="outlined"
                  id="first-name"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  className={classes.fullWidth}
                  variant="outlined"
                  id="last-name"
                  label="Last Name"
                />
              </Grid>
            </Grid>
            <Grid
              container
              className={`${classes.nestedContainer} ${classes.fullWidth}`}
              spacing={5}
            >
              <Grid item xs={12}>
                <TextField
                  className={classes.fullWidth}
                  variant="outlined"
                  id="email"
                  label="Email Address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.fullWidth}
                  variant="outlined"
                  id="phone"
                  label="Phone Number"
                />
              </Grid>
            </Grid>
          <Grid
            container
            className={`${classes.nestedContainer} ${classes.fullWidth}`}
            spacing={5}
            justify="flex-end"
          >
            <Grid item xs={12} md={6}>
              <Button variant="contained" style={{ width: "100%" }}>
                Submit
              </Button>
            </Grid>
          </Grid>
          {/* </Paper> */}

        </Paper>
      </Grid>
    </div>
  );
};

export default Profile;
