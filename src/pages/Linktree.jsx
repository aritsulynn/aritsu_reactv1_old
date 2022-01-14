import React from "react";
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import "./Index.css";
import { Typography } from "@material-ui/core";

export default function Linktree() {
  return (
    <div
      className="text-center App"
      style={{ fontFamily: "Josefin Sans", fontWeight: "Bold" }}
    >
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

      <div class="text-center" style={{ color: "white", marginTop: "1%" }}>
        <Typography class="h1" style={{ fontWeight: "bold" }}>
          Thanawat Jarusuthirug
        </Typography>
        <Typography class="h5">Welcome to Thanawat's Linktree</Typography>
      </div>

      <div>
        <section>
          <div class="d-grid gap-2 col-6 mx-auto">
            <a
              class="btn btn-outline-primary rounded-pill"
              rel="noopener"
              href="https://www.facebook.com/lynniswaifu"
              role="button"
            >
              Facebook
            </a>
            <a
              class="btn btn-outline-warning rounded-pill"
              rel="noopener"
              href="https://www.instagram.com/uandlynn/"
              role="button"
            >
              Instagram
            </a>
            <a
              class="btn btn-outline-info rounded-pill"
              rel="noopener"
              href="https://twitter.com/UandLynn"
              role="button"
            >
              Twitter
            </a>
            <a
              class="btn btn-outline-danger rounded-pill"
              rel="noopener"
              href="https://www.youtube.com/playlist?list=PL7l3hHPNck0brbtza0Nne2Qk8xO-PxTXe"
              role="button"
            >
              Youtube's playlist{" "}
            </a>
            <a
              class="btn btn-outline-light rounded-pill"
              rel="noopener"
              href="https://discord.gg/jZSSD4qtSk"
              role="button"
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
