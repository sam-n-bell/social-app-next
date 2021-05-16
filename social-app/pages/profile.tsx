import React from "react";
import {
  Avatar,
  Box,
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
    root: {
      padding: theme.spacing(3, 2),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    fullWidth: {
      width: "100%",
    },
    paper: {
      padding: 10
    },
    gridItem: {
      margin: 0
    }
  }));
  const classes = useStyles();

  return (
    <Container>
       <Paper
          className={` ${classes.fullWidth} ${classes.root}`}
          style={{ backgroundColor: "#f5f5f5" }}>
            <Grid container className={classes.fullWidth} style={{ padding: 20 }} spacing={5}>
              <Grid item xs={12} md={6}>
                <TextField
                  className={classes.fullWidth}
                  variant="outlined"
                  id="first-name"
                  label="First Name"
                />
              </Grid>
              <Grid item  xs={12} md={6}>
                <TextField
                  className={classes.fullWidth}
                  variant="outlined"
                  id="last-name"
                  label="Last Name"
                />
              </Grid>
              <Grid item  xs={12}>
                <TextField
                  className={classes.fullWidth}
                  variant="outlined"
                  id="email"
                  label="Email Address"
                />
              </Grid>
              <Grid item  xs={12}>
                <TextField
                  className={classes.fullWidth}
                  variant="outlined"
                  id="phone"
                  label="Phone Number"
                />
              </Grid>
              <Grid item  xs={12} md={6}>
              <Button variant="contained" style={{ width: "100%" }}>
                Submit
              </Button>
            </Grid>
           </Grid>
      </Paper>
    </Container>
  );
};

export default Profile;
