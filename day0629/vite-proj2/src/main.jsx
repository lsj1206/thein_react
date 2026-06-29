import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./sementic/Header.jsx";
import Footer from "./sementic/Footer.jsx";
import Garage from "./Garage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Garage />
    <Footer />
  </StrictMode>,
);

