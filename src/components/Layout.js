import { Outlet } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { useContext } from "react";
import ThemeContext from "../context/Theme";
const Layout = () => {
  return (
    <main className="App">
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </main>
  );
};

export default Layout;
