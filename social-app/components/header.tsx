import React from "react";
import {
  makeStyles,
  Theme,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
// const {StylePropable, StyleResizable} = Mixins

const Header: React.FC = () => {
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      width: "100%",
    },
    bar: {
      backgroundColor: theme.palette.primary.dark,
    },
    loginButton: {
      marginLeft: "auto",
      marginRight: -12,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Box component="div" display={{ md: "none" }}>
            <IconButton
              edge="start"
              // className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Button color="inherit" className={classes.loginButton}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
