import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import React from "react";
import "./Index.css";
import { Link } from "react-router-dom";

import { Button, Typography } from "@material-ui/core";

export default function NotFoundPage() {
  return (
    <div>
      <AppHeader />
      <div style={{ textAlign: "center" }} className="App">
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
            variant="h1"
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
    </div>
  );
}
