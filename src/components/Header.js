"use client";

import React from "react";
import Navbar from "./Navbar";
import TypeWriter from "./TypeWriter";

const Header = () => {
  return (
    <header className="relative">
      <Navbar />
      <TypeWriter />
    </header>
  );
};

export default Header;
