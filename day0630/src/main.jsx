import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./sementic/Header";
import Footer from "./sementic/Footer";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Footer />
  </StrictMode>,
);
