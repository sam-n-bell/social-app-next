import React from "react";
import { Theme, makeStyles, Grid, Button } from "@material-ui/core";

const ThemeProviderExample: React.FC = () => {
  const useStyles = makeStyles((theme: Theme) => ({
    primaryButton: {
      backgroundColor: theme.palette.primary.main,
    },
    secondaryButton: {
    //   backgroundColor: theme.palette.secondary.main,
    },
  }));

  const classes = useStyles();

  return (
    <Grid container spacing={3} style={{ padding: 25 }}>
      <Grid item xs={3}>
        <Button variant={"contained"} color={"primary"}>Primary</Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant={"contained"} color={"primary"} disabled={true}>Disabled</Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant={"contained"} color={"secondary"} disabled={true}>Disabled</Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant={"contained"} color={"secondary"}>Secondary</Button>
      </Grid>
    </Grid>
  );
};

export default ThemeProviderExample;
