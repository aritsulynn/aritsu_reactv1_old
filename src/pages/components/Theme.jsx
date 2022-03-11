import {
  createTheme,
  responsiveFontSizes,
} from "@material-ui/core";

const theme = responsiveFontSizes(
  createTheme({

    typography: {
      fontFamily: "Josefin Sans",
    },
    palette: {
      background: {
        default: "#222222"
      },
      text: {
        primary: "#ffffff"
      }
    }

  })
);

export default theme;
