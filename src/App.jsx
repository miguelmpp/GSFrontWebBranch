import { Outlet } from "react-router-dom";
import Header from "./Componentes/Header/Header";
import React from 'react';
import Footer from "./Componenetes/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
}

export default App;
