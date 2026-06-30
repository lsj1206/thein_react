import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import Header from "./sementic/Header";
import Footer from "./sementic/Footer";
import MyApp from "./MyApp";
import Tictactoe from "./Tictactoe";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <MyApp />
    <hr />
    <Tictactoe />
    <Footer />
  </StrictMode>,
);
