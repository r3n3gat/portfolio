"use client";

import React, { useEffect, useRef, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);
  const sections = useRef([]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleActiveLink = () => {
    const y = window.scrollY + 120; // offset pour navbar fixed
    let current = "home";

    sections.current.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (y >= top && y < top + height) current = section.id;
    });

    setActiveSection(current);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll("[data-section]");
    handleActiveLink();
    window.addEventListener("scroll", handleActiveLink, { passive: true });
    return () => window.removeEventListener("scroll", handleActiveLink);
  }, []);

  const menuItems = [
    { text: "Accueil", section: "home" },
    { text: "À propos", section: "about" },
    { text: "Compétences", section: "skills" },
    { text: "Projets", section: "projects" },
    { text: "Contact", section: "contact" },
  ];

  const solid = isScrolled || open;

  const linkClass = (section) => {
    const base =
      "px-3 py-2 rounded-md text-[0.78rem] font-medium uppercase tracking-widest transition-colors duration-200";
    const colors = solid
      ? "text-gray-light hover:text-gray-dark"
      : "text-off-white/80 hover:text-off-white";
    const active =
      activeSection === section
        ? solid
          ? "text-gray-dark shadow-[inset_0px_-6px_0px] shadow-blue-light"
          : "text-off-white shadow-[inset_0px_-6px_0px] shadow-blue-global"
        : "";
    return `${base} ${colors} ${active}`;
  };

  const closeMenu = () => setOpen(false);

  return (
    <nav
      className={`fixed left-0 top-0 z-[100] w-full transition-all duration-300 ${
        solid ? "bg-off-white/85 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="m-auto flex max-w-[1160px] items-center justify-between px-5 py-4 md:px-6 lg:px-12">
        <a
          href="#home"
          onClick={closeMenu}
          className={`font-kaushan text-[1.6rem] font-semibold tracking-wide transition-colors ${
            solid ? "text-gray-dark" : "text-off-white"
          }`}
        >
          ENOTO<span className="text-blue-global">.</span>
        </a>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex items-center justify-center rounded-md p-2 text-2xl transition-colors lg:hidden ${
            solid ? "text-gray-dark" : "text-off-white"
          }`}
        >
          {open ? <AiOutlineClose /> : <RiMenu3Fill />}
        </button>

        {/* Desktop */}
        <ul className="hidden items-center gap-2 lg:flex">
          {menuItems.map((item) => (
            <li key={item.section}>
              <a href={`#${item.section}`} className={linkClass(item.section)}>
                {item.text}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a
              href="/CV_STEVI_ENOTO.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-blue-global px-4 py-2 text-[0.78rem] font-medium uppercase tracking-widest text-off-white transition-all hover:brightness-110"
            >
              CV (PDF)
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile panel */}
      <div
        className={`lg:hidden transition-all duration-300 ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="border-t border-gray-200 bg-off-white px-5 py-5 text-center">
          {menuItems.map((item) => (
            <li key={item.section} className="py-2">
              <a
                href={`#${item.section}`}
                onClick={closeMenu}
                className={`inline-block ${linkClass(item.section)}`}
              >
                {item.text}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="/CV_STEVI_ENOTO.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-flex w-full items-center justify-center rounded-md bg-blue-global px-4 py-3 text-[0.78rem] font-medium uppercase tracking-widest text-off-white"
            >
              Télécharger le CV (PDF)
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
