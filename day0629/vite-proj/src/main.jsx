import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyApp from "./MyApp";
import Header from "./sementic/Header";
import Footer from "./sementic/Footer";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <MyApp />
    <Footer />
  </StrictMode>,
);

