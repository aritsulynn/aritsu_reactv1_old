// eslint-disable-next-line
import React from "react";
//import components
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";

// import css
import "./App.css";
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import theme from "./components/Theme";

import {
  CssBaseline,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";


export default function Home() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader />
        <div className="CoverImg">
          <div className="texti">
            <Typography variant="h2" align="center">
              Welcome to
            </Typography>
            <Typography variant="h1" align="center">
              "Gendary!"
            </Typography>
          </div>
        </div>
        <Footer/>
      </MuiThemeProvider>
    </div>
  );
}
