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
      <div
        style={{  textAlign: "center" }}
        className="App CoverImg"
      >
        <Typography
          variant="h1"
          style={{
            fontWeight: "1000",
            textAlign: "center",
            fontFamily: "Josefin Sans",
            color: "white",
          }}
        >
          Sorry, this page is not found!
        </Typography>

        <Button variant="contained" size="medium" style={{backgroundColor: 'black'}}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </Button>
      </div>
      <Footer />
    </div>
  );
}
