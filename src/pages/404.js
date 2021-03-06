import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import theme from "./components/Theme";

import {
  CssBaseline,
  MuiThemeProvider,
  Typography,
  Button,
} from "@material-ui/core";

export default function NotFoundPage() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader />
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              backgroundColor: "black",
              position: "relative",
              backgroundImage:
                'url("https://wallpapercave.com/wp/wp5490312.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h2"
              style={{
                paddingTop: "10%",
                fontWeight: "bold",
                fontFamily: "Josefin Sans",
                color: "white",
              }}
            >
              Sorry, this page is not found!
            </Typography>

            <Button
              variant="contained"
              size="medium"
              style={{
                backgroundColor: "black",
                marginTop: "2%",
                marginBottom: "10%",
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </MuiThemeProvider>
    </div>
  );
}
