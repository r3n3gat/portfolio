"use client";

import React, { useEffect, useMemo, useState } from "react";
import { BiLogoGithub, BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import { RiFilePdf2Fill } from "react-icons/ri";

const TypeWriter = () => {
  const phrases = useMemo(
    () => [
      "Développeur full-stack Python",
      "Django & Django REST Framework",
      "API sécurisées • JWT",
      "Web : React / Next.js",
      "Mobile : Flutter",
      "Tests • Docker • CI/CD",
    ],
    []
  );

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const speed = isDeleting ? 32 : 52;
    const pauseAfterTyped = 900;

    const tick = () => {
      if (!isDeleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setIsDeleting(true), pauseAfterTyped);
          return;
        }
      } else {
        const next = current.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next === "") {
          setIsDeleting(false);
          setPhraseIndex((i) => (i + 1) % phrases.length);
          return;
        }
      }
    };

    const t = setTimeout(tick, speed);
    return () => clearTimeout(t);
  }, [phrases, phraseIndex, text, isDeleting]);

  return (
    <section
      id="home"
      data-section
      className="relative flex min-h-screen items-center overflow-hidden bg-gray-global pt-20"
    >
      {/* décor léger */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-global blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-light blur-3xl" />
      </div>

      <div className="relative m-auto w-full max-w-[1160px] px-5 py-20 md:px-6 lg:px-12">
        <div className="max-w-[820px]">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1 text-xs tracking-widest text-off-white">
            ENOTO DIGITAL CONSEIL
            <span className="h-1 w-1 rounded-full bg-blue-global" />
            Développement d’applications
          </p>

          <h1 className="text-balance font-kaushan text-[2.4rem] leading-tight text-off-white md:text-[3.1rem] lg:text-[3.6rem]">
            Applications <span className="text-blue-global">web</span> &{" "}
            <span className="text-blue-global">mobile</span>
            <br className="hidden md:block" /> avec un back-end robuste.
          </h1>

          <p className="mt-6 text-[1rem] leading-7 text-off-white/80 md:text-[1.08rem]">
            Spécialisé Python. Je construis des APIs (Django/DRF), des interfaces
            web modernes (React/Next.js) et des apps mobiles (Flutter), avec une
            approche qualité (tests, Docker, CI/CD).
          </p>

          <div className="mt-7 text-[0.98rem] text-off-white/90 md:text-[1.08rem]">
            <span className="mr-2 text-off-white/70">Focus :</span>
            <span className="font-medium text-blue-global">{text}</span>
            <span className="ml-1 inline-block w-[10px] animate-pulse text-blue-global">
              |
            </span>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-blue-global px-5 py-3 text-sm font-medium uppercase tracking-wider text-off-white transition-all hover:brightness-110"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-off-white/20 bg-transparent px-5 py-3 text-sm font-medium uppercase tracking-wider text-off-white transition-all hover:bg-off-white/10"
            >
              Me contacter
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-off-white/80">
            <a
              href="https://github.com/r3n3gat"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="transition-all hover:text-off-white"
            >
              <BiLogoGithub className="h-7 w-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/stevi-enoto/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="transition-all hover:text-off-white"
            >
              <BiLogoLinkedin className="h-7 w-7" />
            </a>
            <a
              href="mailto:stevi.enoto@gmail.com"
              title="Email"
              className="transition-all hover:text-off-white"
            >
              <BiLogoGmail className="h-7 w-7" />
            </a>
            <a
              href="/CV_STEVI_ENOTO.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="CV (PDF)"
              className="transition-all hover:text-off-white"
            >
              <RiFilePdf2Fill className="h-7 w-7" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-2 text-xs text-off-white/70">
            <span className="rounded-full border border-off-white/15 px-3 py-1">
              Django / DRF
            </span>
            <span className="rounded-full border border-off-white/15 px-3 py-1">
              JWT • Permissions
            </span>
            <span className="rounded-full border border-off-white/15 px-3 py-1">
              React / Next.js
            </span>
            <span className="rounded-full border border-off-white/15 px-3 py-1">
              Flutter
            </span>
            <span className="rounded-full border border-off-white/15 px-3 py-1">
              Docker • CI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypeWriter;
