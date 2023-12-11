"use client";
import React from "react";
import Loader from "@/src/components/Loader";
import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import Project from "@/src/components/Project";
import ScrollToTopButton from "@/src/components/ScrollToTopButton";
import SectionCTA from "@/src/components/SectionCTA";
import Skills from "@/src/components/Skills";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/custom-fonts.css";

const Home = () => {
  return (
    <div>
      <Loader />
      <ScrollToTopButton />
      <About />
      <Skills />
      <Project />
      <SectionCTA />
      <Contact />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default Home;
