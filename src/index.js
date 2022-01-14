import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// router
import Index from "./pages";
import Linktree from "./pages/Linktree";
import NotFoundPage from "./pages/404";
import Anime from "./pages/lynn/Anime";
import Discord from "./pages/lynn/Discord";
// import Invoices from "./routes/invoices";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<Index />} />
      <Route path="/Linktree" element={<Linktree />} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
      <Route path="/Anime" element={<Anime />} />
      <Route path="/Discord" element={<Discord />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
