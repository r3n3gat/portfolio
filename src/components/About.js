/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      data-section
      id="about"
      className=" m-auto -my-20 px-5 pb-12 pt-6 md:px-6 md:py-14 lg:-my-24 lg:max-w-[1160px] lg:px-12 lg:py-24"
    >
      <div className="my-24 md:flex md:gap-8 lg:my-32 lg:gap-12">
        <motion.img
          src="/img/img-about.webp"
          alt="ordinateur portable de développeur montrant du code"
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
            Moi c&apos;est Stevi, <br />
            développeur web front-end.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="pt-3 text-sm leading-6 text-gray-light lg:text-[0.95rem]">
              Je suis passionné d&apos;informatique depuis tout petit. Geek à
              mes heures perdues je me suis intéressé au développement
              d&apos;abord par envie personnelle de découverte et de maîtrise
              des choses avant de décider d&apos;en faire mon métier en
              enrichissant mon expertise en CSS, HTML, javascript, REACT et
              NextJS.
            </p>
            <p className="pt-3 text-sm leading-6 text-gray-light lg:text-[0.95rem]">
              En formation diplomante chez OpenCLassrooms, j&apos;ai pu
              développer mes compétences, entre autres, sur{" "}
              <span className="inline-block pt-1 leading-4 text-gray-dark shadow-[inset_0px_-6px_0px] shadow-blue-ultra-light">
                React,
              </span>{" "}
              <span className="inline-block pt-1 leading-4 text-gray-dark shadow-[inset_0px_-6px_0px] shadow-blue-ultra-light">
                Sass
              </span>
              ,{" "}
              <span className="inline-block pt-1 leading-4 text-gray-dark shadow-[inset_0px_-6px_0px] shadow-blue-ultra-light">
                Node.js
              </span>{" "}
              et{" "}
              <span className="inline-block pt-1 leading-4 text-gray-dark shadow-[inset_0px_-6px_0px] shadow-blue-ultra-light">
                Redux
              </span>{" "}
              afin de pouvoir créer des applications web performantes. Je
              continue d&apos;apprendre et me former au quotidien afin
              d&apos;acquérir la maitrise des outils les plus performants.
            </p>
            <p className="pt-3  text-sm leading-6 text-gray-light lg:text-[0.95rem]">
              Je vous laisse parcourir mon portfolio afin de découvrir mes
              réalisations. Je reste disponible et vous répondrez si vous
              vouliez en savoir plus ou collaborer avec moi.
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
              className="mt-9 inline-block pl-[2px] text-[0.9rem] font-medium uppercase leading-[0.875rem] tracking-widest shadow-[inset_0px_-6px_0px] shadow-blue-light transition-all duration-[400ms] ease-out hover:shadow-[inset_0px_-15px_0px] hover:shadow-blue-light "
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
