// import logo from './logo.svg';
import "./App.css";
//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//import components
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";

// import { Button } from 'react-bootstrap'

import {
  createTheme,
  MuiThemeProvider,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

let theme = createTheme({
  pallette: {
    background: "primary.main",
  },
  typography: {
    fontFamily: "Josefin Sans",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <AppHeader />
        <div className="CoverImg">
          <Typography variant="h3" style={{ fontWeight: "regular" }}>
            Welcome to
          </Typography>
          <Typography variant="h1" style={{ fontWeight: "bolder" }}>
            "Gendary!"
          </Typography>
        </div>

        <div>
          <Typography
            variant="subtitle1"
            style={{ background: "yellow", textAlign: "center" }}
          >
            This site is under redeveloped by react! {"\n"} Some Feature or page
            might not working
          </Typography>
        </div>
        <Footer />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
