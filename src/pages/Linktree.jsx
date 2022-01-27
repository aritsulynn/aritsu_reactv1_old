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
          src="https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/272252268_432374282006432_1278985274575908197_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFwXUynpAagnu6mXwUL2tpwYo66jyelihFijrqPJ6WKEYD51TATPYNhJkfw5qjQEiZICeruSN7BByl5_9LJXXtj&_nc_ohc=_MepoY3cHgEAX8tLNN9&tn=u8bBuYC9ndmKmqfL&_nc_ht=scontent.fbkk17-1.fna&oh=00_AT8QU0y_B0vV1bRJjUAIkCrdRi8KCGHWxvRBl_cSt5JN0Q&oe=61F69598"
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
          variant="h5"
          style={{ fontWeight: "bolder", fontFamily: "Josefin Sans" }}
        >
          Lynn.
        </Typography>
        <Typography variant="subtitle2">Welcome to Lynn's Linktree</Typography>
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
    </div>
  );
}
