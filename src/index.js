import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// router
import App from "./pages/App";
import NotFoundPage from "./pages/404";


// import Invoices from "./routes/invoices";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
