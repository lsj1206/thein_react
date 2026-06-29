import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./sementic/Header.jsx";
import Footer from "./sementic/Footer.jsx";
import Garage from "./Garage.jsx";
import MyTable from "./ch08/MyTable.jsx";
import MyList from "./ch08/MyList.jsx";
import MyForm from "./ch08/MyForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Garage />
    <MyTable />
    <MyList />
    <MyForm />
    <Footer />
  </StrictMode>,
);

