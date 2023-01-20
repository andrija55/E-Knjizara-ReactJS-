import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import Pretraga from "./Pretraga";
import MojeKnjige from "./MojeKnjige";
import { useState } from "react";
import Footer from "./Footer";

export default function App() {
  const [knjige, dodajKnjige] = useState([]);
  
 
  return (
    
    
     <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route
          element={<Pretraga knjige={knjige} dodajKnjige={dodajKnjige} />}
          path={"/"}
        />
        <Route element={<MojeKnjige knjige={knjige} />} path={"/moje-knjige"} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
  
}