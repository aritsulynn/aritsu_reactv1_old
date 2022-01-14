import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// router
import Index from "./pages";
import Linktree from "./pages/Linktree";
import NotFoundPage from "./pages/404";
// import Invoices from "./routes/invoices";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<Index />} />
      <Route path="/Linktree" element={<Linktree />} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>,
  rootElement
);
