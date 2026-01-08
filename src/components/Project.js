"use client";

import React, { useMemo, useState } from "react";
import dataProjects from "../data/dataProjects.json";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const FILTERS = [
  { label: "Tous", keys: [] },
  { label: "Python", keys: ["python"] },
  { label: "Django", keys: ["django", "drf", "django rest"] },
  { label: "API", keys: ["api", "rest", "jwt"] },
  { label: "Web", keys: ["react", "next", "tailwind"] },
  { label: "Mobile", keys: ["flutter"] },
  { label: "DevOps", keys: ["docker", "ci", "github actions"] },
  { label: "SEO", keys: ["seo", "lighthouse", "schema", "accessibilité"] },
];

const normalize = (s) => (s || "").toString().toLowerCase();

const Project = () => {
  const allProjects = dataProjects;

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState(FILTERS[0]);
  const [limit, setLimit] = useState(6);

  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = normalize(query);

    return allProjects.filter((p) => {
      const haystack = [
        p.title,
        p.client,
        p.presentation,
        p.overview,
        ...(Array.isArray(p.tags) ? p.tags : []),
      ]
        .map(normalize)
        .join(" ");

      const matchQuery = q ? haystack.includes(q) : true;

      const matchFilter =
        !filter.keys.length ||
        (Array.isArray(p.tags) &&
          p.tags.some((t) =>
            filter.keys.some((k) => normalize(t).includes(normalize(k)))
          ));

      return matchQuery && matchFilter;
    });
  }, [allProjects, query, filter]);

  const visible = filtered.slice(0, limit);

  const onOpen = (project) => {
    setSelected(project);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <section
      data-section
      id="projects"
      className="m-auto max-w-[1160px] px-5 py-16 md:px-6 md:py-20 lg:px-12 lg:py-24"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-kaushan text-3xl text-gray-dark md:text-[2.4rem]">
            Projets
          </h2>
          <p className="mt-2 max-w-[680px] text-[0.95rem] leading-6 text-gray-light">
            Sélection orientée produit : back-end Python, APIs, web et mobile.
            (Recherche + filtres pour voir vite ce qui t’intéresse.)
          </p>
        </div>

        <div className="mt-4 w-full md:mt-0 md:w-[360px]">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setLimit(6);
            }}
            placeholder="Rechercher : Django, API, Flutter, SEO…"
            className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-global"
          />
          <p className="mt-2 text-xs text-gray-400">
            {filtered.length} résultat(s)
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const active = f.label === filter.label;
          return (
            <button
              key={f.label}
              type="button"
              onClick={() => {
                setFilter(f);
                setLimit(6);
              }}
              className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition ${
                active
                  ? "bg-blue-global text-off-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, idx) => (
          <ProjectCard
            key={p.id ?? `${p.title}-${idx}`}
            project={p}
            onOpen={onOpen}
            index={idx}
          />
        ))}
      </div>

      {/* Load more */}
      {limit < filtered.length ? (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setLimit((v) => v + 6)}
            className="rounded-md border border-gray-200 bg-white px-5 py-3 text-[0.78rem] font-medium uppercase tracking-widest text-gray-dark transition hover:bg-gray-50"
          >
            Charger plus
          </button>
        </div>
      ) : null}

      <ProjectModal project={selected} isOpen={open} onClose={onClose} />
    </section>
  );
};

export default Project;
