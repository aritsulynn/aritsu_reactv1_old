import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// router
import App from "./pages/App";
import Linktree from "./pages/lynn/Linktree";
import NotFoundPage from "./pages/404";
import Anime from "./pages/lynn/Anime";
import Discord from "./pages/lynn/Discord";


// import Invoices from "./routes/invoices";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<App />} />
      <Route path="/Linktree" element={<Linktree />} /> 
      <Route path="/Anime" element={<Anime />} />
      <Route path="/Discord" element={<Discord />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
