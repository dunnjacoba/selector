import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import "../../App.css";
import logo from "../../images/octocat-1661640395587.png";

export default function Layout({ children }) {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {children}
      </header>
      <Footer />
    </div>
  );
}
