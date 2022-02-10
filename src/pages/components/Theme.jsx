import {
  CssBaseline,
  createTheme,
  MuiThemeProvider,
  responsiveFontSizes,
  Typography,
  Button,
  Container,
} from "@material-ui/core";

const theme = responsiveFontSizes(
  createTheme({
    spacing: 4,
    typography: {
      fontFamily: ["Roboto", "Raleway", "Open Sans", "Josefin Sans"].join(","),
      h1: {
        fontSize: "5rem",
        fontFamily: "Josefin Sans",
      },
      h2: {
        fontSize: "3.5rem",
        fontFamily: "Josefin Sans",
        fontStyle: "bold",
      },
      h3: {
        fontSize: "2.5rem",
        fontFamily: "Josefin Sans",
      },
      h4: {
        fontSize: "1.5rem",
        fontFamily: "Josefin Sans",
      },
      h5: {
        fontSize: "0.5rem",
        fontFamily: "Josefin Sans",
      },
    },
    palette: {
      background: {
        default: "#212529", //dark
      },
      primary: {
        main: "#2B37D4", //indigo
      },
      secondary: {
        main: "#E769A6", //pink
      },
      error: {
        main: "#D72A2A", //red
      },
      warning: {
        main: "#FC7B09", //orange
      },
      info: {
        main: "#6B7D6A", //gray
      },
      success: {
        main: "#09FE00", //green
      },
      text: {
        primary: "#000000", //black
        secondary: "#FFFFFF", //white
      },
    },
  })
);

export default theme;
