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
  Drawer,
  ListItem,
  ListItemText,
  List,
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
    centerDrawerText: {
      textAlign: "center",
    },
  }));

  const classes = useStyles();

  const [showDrawer, setShowDrawer] = React.useState<boolean>(false);

  const toggleDrawer = (status: boolean) => (event) => {
    setShowDrawer(status);
  };

  const drawerList = () => {
    return (
      <div style={{ minWidth: 200 }} role="presentation">
        <List>
          <ListItem button>
            <ListItemText className={classes.centerDrawerText}>
              HELLO PERSON!
            </ListItemText>
          </ListItem>
        </List>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <Drawer
        anchor={"left"}
        open={showDrawer}
        onClose={toggleDrawer(false)}
        onBackdropClick={toggleDrawer(false)}
      >
        {drawerList()}
      </Drawer>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Box
            component="div"
            display={{ md: "none" }}
            className={classes.loginButton}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            component="div"
            display={{ xs: "none", md: "block" }}
            className={classes.loginButton}
          >
            <Button color="inherit">Login</Button>
            {/* <Button color="inherit">Logout</Button> */}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
