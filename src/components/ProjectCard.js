"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";

const ProjectCard = ({ project, onOpen, index }) => {
  const hasImage = Boolean(project?.img_cover);
  const tags = Array.isArray(project?.tags) ? project.tags.slice(0, 4) : [];

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: 0.05 * (index ?? 0) }}
      className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Media */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        {hasImage ? (
          <img
            src={project.img_cover}
            alt={`Aperçu du projet ${project.title}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-100">
            <span className="text-sm font-medium text-gray-500">
              {project?.title ?? "Projet"}
            </span>
          </div>
        )}

        {/* Gradient overlay discret */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Quick links (hover desktop) */}
        <div className="absolute right-3 top-3 hidden gap-2 lg:flex">
          {project?.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-gray-800 shadow-sm transition hover:bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <BsGithub className="h-4 w-4" />
            </a>
          ) : null}
          {project?.website ? (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              title="Démo"
              className="inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-gray-800 shadow-sm transition hover:bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <HiOutlineExternalLink className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-pretty font-kaushan text-[1.65rem] leading-tight text-gray-dark">
            {project.title}
          </h3>
        </div>

        {project?.presentation ? (
          <p className="mt-2 line-clamp-3 text-[0.95rem] leading-6 text-gray-light">
            {project.presentation}
          </p>
        ) : null}

        {/* Tags */}
        {tags.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[0.72rem] font-medium text-gray-600"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        {/* Actions */}
        <div className="mt-5 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex items-center justify-center rounded-md bg-blue-global px-4 py-2 text-[0.78rem] font-medium uppercase tracking-widest text-off-white transition-all hover:brightness-110"
          >
            Détails
          </button>

          <div className="flex items-center gap-3">
            {project?.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition hover:text-gray-dark"
                title="GitHub"
              >
                <BsGithub className="h-5 w-5" />
              </a>
            ) : null}

            {project?.website ? (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition hover:text-gray-dark"
                title="Démo"
              >
                <HiOutlineExternalLink className="h-5 w-5" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
