import React from "react";
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import "./Index.css";
import theme from "./components/Theme";

import {
  CssBaseline,
  MuiThemeProvider,
  responsiveFontSizes,
  Typography,
  Button,
  Container,
} from "@material-ui/core";

export default function Linktree() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader />
        <div className="text-center" style={{ marginTop: "2%" }}>
          <img
            class="rounded-circle img-fluid"
            src="https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/272401366_440738641169996_5244761586911076833_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFNxTM4ricd6nblRW6nJ1phr-sG_0oqogqv6wb_SiqiClSKyJyjJFahdCkoEKdcUex8gpW_KaV-g2LF9BnM_moZ&_nc_ohc=QJEsQcpZu0wAX91b--u&_nc_ht=scontent.fbkk17-1.fna&oh=00_AT-Ody_lf78pVFMs_MdyxncOEhUwQ3oP5z1jCcOJz-lLPQ&oe=620A3EF2"
            alt=""
            width="200"
            height="150"
          />
        </div>

        <div
          class="text-center"
          style={{
            color: "white",
            marginTop: "1%",
            fontFamily: "Josefin Sans",
            fontWeight: "bolder",
          }}
        >
          <Typography
            variant="h4"
            style={{ fontWeight: "bolder", fontFamily: "Josefin Sans" }}
          >
            Lynniswaifu
          </Typography>
          <Typography variant="subtitle2">
            Welcome to Lynn's Linktree
          </Typography>
        </div>

        <div>
          <section>
            <div className="d-grid gap-2 col-6 mx-auto">
              <a
                className="btn btn-outline-primary rounded-pill"
                rel="noopener"
                href="https://www.facebook.com/lynniswaifu"
                role="button"
                style={{ fontWeight: "bolder" }}
              >
                Facebook
              </a>
              <a
                className="btn btn-outline-warning rounded-pill"
                rel="noopener"
                href="https://www.instagram.com/uandlynn/"
                role="button"
                style={{ fontWeight: "bolder" }}
              >
                Instagram
              </a>
              <a
                className="btn btn-outline-info rounded-pill"
                rel="noopener"
                href="https://twitter.com/UandLynn"
                role="button"
                style={{ fontWeight: "bolder" }}
              >
                Twitter
              </a>
              <a
                className="btn btn-outline-danger rounded-pill"
                rel="noopener"
                href="https://www.youtube.com/playlist?list=PL7l3hHPNck0aN8epzCkfqAb1PCFCdmy83"
                role="button"
                style={{ fontWeight: "bolder" }}
              >
                Youtube's playlist{" "}
              </a>
              <a
                className="btn btn-outline-light rounded-pill"
                rel="noopener"
                href="https://discord.gg/jZSSD4qtSk"
                role="button"
                style={{ fontWeight: "bolder" }}
              >
                Discord Server
              </a>
            </div>
          </section>
        </div>
        <Footer />
      </MuiThemeProvider>
    </div>
  );
}
