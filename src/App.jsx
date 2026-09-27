import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return React.createElement(
    "div",
    { className: "d-flex flex-column min-vh-100" },
    React.createElement(Navbar, null),
    React.createElement(Cart, null),
    React.createElement(Footer, null)
  );
}

export default App;