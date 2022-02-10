// eslint-disable-next-line
import React from "react";
//import components
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";

// import logo from './logo.svg';
import "./Index.css";
//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// import { Button } from 'react-bootstrap'

// import {
//   createTheme,
//   MuiThemeProvider,
//   responsiveFontSizes,
//   // ThemeProvider,
//   Typography,
// } from "@material-ui/core";
// // Link

// let theme = createTheme({
//   pallette: {
//     background: "primary",
//   },
//   typography: {
//     fontFamily: "Josefin Sans",
//     fontWeightLight: 400,
//     fontWeightRegular: 500,
//     fontWeightMedium: 600,
//     fontWeightBold: 900,
//   },
// });

import theme from "./components/Theme";
import {
  CssBaseline,
  // createTheme,
  MuiThemeProvider,
  responsiveFontSizes,
  Typography,
  Button,
  Container,
} from "@material-ui/core";

// theme = responsiveFontSizes(theme);

export default function Home() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader />
        <div className="CoverImg">
          <Typography variant="h3" style={{ fontWeight: "normal" }}>
            Welcome to
          </Typography>
          <Typography variant="h1" style={{ fontWeight: "bold" }}>
            "Gendary!"
          </Typography>
        </div>

        {/* <div>
          <Typography
            variant="subtitle1"
            style={{
              background: "yellow",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            This site is under redeveloped by react! {"\n"} Some Feature or page
            might not working
          </Typography>
        </div> */}
        <Footer />
      </MuiThemeProvider>
    </div>
  );
}
