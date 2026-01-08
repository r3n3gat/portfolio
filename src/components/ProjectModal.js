"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.classList.add("scrollHidden");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("scrollHidden");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const tags = Array.isArray(project?.tags) ? project.tags : [];

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 px-4 py-10 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Détails du projet ${project.title}`}
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-off-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header image */}
        <div className="relative aspect-[16/8] w-full bg-gray-100">
          {project?.img_info ? (
            <img
              src={project.img_info}
              alt={`Illustration du projet ${project.title}`}
              className="h-full w-full object-cover"
            />
          ) : project?.img_cover ? (
            <img
              src={project.img_cover}
              alt={`Illustration du projet ${project.title}`}
              className="h-full w-full object-cover"
            />
          ) : null}

          <button
            onClick={onClose}
            className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-gray-800 shadow-sm transition hover:bg-white"
            aria-label="Fermer"
          >
            <AiOutlineClose className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[70vh] overflow-y-auto p-6 md:p-8">
          <div className="flex flex-col gap-2">
            <h3 className="font-kaushan text-[2rem] leading-tight text-gray-dark">
              {project.title}
            </h3>
            {project?.client ? (
              <p className="text-[0.95rem] text-gray-light">
                <span className="font-semibold text-gray-dark">Contexte :</span>{" "}
                {project.client}
              </p>
            ) : null}
          </div>

          {project?.presentation ? (
            <div className="mt-6">
              <p className="text-[0.95rem] font-semibold text-gray-dark">
                Présentation
              </p>
              <p className="mt-2 text-[0.95rem] leading-7 text-gray-light">
                {project.presentation}
              </p>
            </div>
          ) : null}

          {project?.overview ? (
            <div className="mt-6">
              <p className="text-[0.95rem] font-semibold text-gray-dark">
                Objectifs / Résultat
              </p>
              <p className="mt-2 whitespace-pre-line text-[0.95rem] leading-7 text-gray-light">
                {project.overview}
              </p>
            </div>
          ) : null}

          {tags.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-2">
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
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
            {project?.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-3 text-[0.78rem] font-medium uppercase tracking-widest text-gray-dark transition hover:bg-gray-50"
              >
                <BsGithub className="h-4 w-4" />
                GitHub
              </a>
            ) : null}

            {project?.website ? (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-global px-4 py-3 text-[0.78rem] font-medium uppercase tracking-widest text-off-white transition hover:brightness-110"
              >
                <HiOutlineExternalLink className="h-4 w-4" />
                Démo
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
