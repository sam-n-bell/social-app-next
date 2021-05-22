import { createMuiTheme, Theme, ThemeProvider } from "@material-ui/core/styles";

// Create a theme instance.
const myTheme: Theme = createMuiTheme({
  overrides: {
    // dont use it override erryyyything
    // MuiButton: {
    //   root: {
    //     backgroundColor: "#7a7a7a",
    //     "&$disabled": {
    //       backgroundColor: "#c2c2c2",
    //     },
    //     "&:hover": {
    //         backgroundColor: "#f2f2f2",
    //         color: '#3c52b2',
    //     }
    //   },
    // },
  },
  palette: {
    primary: {
      light: "#b3b3b3",
      main: "#7a7a7a",
      dark: "#5e5e5e",
    },
    secondary: {
      light: "#ff6e6e",
      main: "#f21616",
    },
    // unnecessary but useful to see
    // text: {
    //   primary: "#ffffff",
    // },
    // action: {
    //   disabled: "#dbdbdb", //text color
    //   disabledOpacity: 0.5,
    //   // disabledBackground: '00ff95'//background color
    // //   hoverOpacity: 0.1,
    // },
  },
});

export default myTheme;
