import React from "react";
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import "./Index.css";
import { Typography } from "@material-ui/core";

export default function Linktree() {
  return (
    <div className="App">
      <AppHeader />
      <div className="text-center" style={{ marginTop: "2%" }}>
        <img
          class="rounded-circle img-fluid"
          src="https://i.imgur.com/tRjMnpS.jpg"
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
        <Typography variant="h5">Thanawat Jarusuthirug</Typography>
        <Typography variant="subtitle">
          Welcome to Thanawat's Linktree
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
              href="https://www.youtube.com/playlist?list=PL7l3hHPNck0brbtza0Nne2Qk8xO-PxTXe"
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
    </div>
  );
}
