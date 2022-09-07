import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import "../../App.css";
import { IoFastFoodSharp } from "react-icons/io5";

export default function Layout({ children }) {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <IoFastFoodSharp />
        {children}
      </header>
      <Footer />
    </div>
  );
}
