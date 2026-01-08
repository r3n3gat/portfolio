/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      data-section
      id="about"
      className="m-auto -my-20 px-5 pb-12 pt-6 md:px-6 md:py-14 lg:-my-24 lg:max-w-[1160px] lg:px-12 lg:py-24"
    >
      <div className="my-24 md:flex md:gap-8 lg:my-32 lg:gap-12">
        <motion.img
          src="/img/img-about.webp"
          alt="Ordinateur de développeur affichant du code"
          className="m-auto h-[500px] rounded-[3px] object-cover md:m-0"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />

        <div className="content-about">
          <motion.h1
            className="pb-3 pt-12 font-autography text-[3.3rem] md:pb-3 md:pt-3 md:text-[2rem] lg:text-[2.5rem]"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Moi c&apos;est Stevi,<br />
            développeur full-stack Python (web &amp; mobile).
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="pt-3 text-sm leading-6 text-gray-light lg:text-[0.95rem]">
              Je conçois des applications complètes : API back-end robustes,
              interfaces web modernes et applications mobiles. Mon axe principal
              est Python, avec Django et Django REST Framework.
            </p>

            <p className="pt-3 text-sm leading-6 text-gray-light lg:text-[0.95rem]">
              Côté web, je travaille avec React / Next.js. Côté mobile, je
              m&apos;appuie sur Flutter. Je mets l&apos;accent sur la qualité :
              authentification (JWT), tests, intégration continue, et
              déploiement (Docker).
            </p>

            <p className="pt-3 text-sm leading-6 text-gray-light lg:text-[0.95rem]">
              Parcours OpenClassrooms : projets concrets (API, CRM, apps
              full-stack), méthode agile, et exigences de production. Tu peux
              parcourir mes réalisations ci-dessous et me contacter si tu veux
              collaborer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <a
              href="#contact"
              className="mt-9 inline-block pl-[2px] text-[0.9rem] font-medium uppercase leading-[0.875rem] tracking-widest shadow-[inset_0px_-6px_0px] shadow-blue-light transition-all duration-[400ms] ease-out hover:shadow-[inset_0px_-15px_0px] hover:shadow-blue-light"
            >
              Me contacter
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
