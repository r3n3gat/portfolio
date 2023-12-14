/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css, keyframes } from "@emotion/react";

const phrases = [
  "Développeur",
  "Persévérant",
  "Créatif",
  "Curieux",
  "Codeur",
  "polyvalent",
  "Passionné",
  "Rigoureux",
  "Autonome",
  "Designer",
  "Agile",
];
const animationDuration = 5; // Durée de l'animation en secondes

const fadeInOut = keyframes`
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
`;

const randomPosition = () => {
  let x, y;
  if (window.innerWidth < 768) {
    x = Math.random() * 50; // Réduire pour les mobiles
    y = Math.random() * 50;
  } else if (window.innerWidth < 1024) {
    x = Math.random() * 80; // Réduire pour les tablettes
    y = Math.random() * 80;
  } else {
    x = Math.random() * 85; // Légère réduction pour les ordinateurs
    y = Math.random() * 85;
  }
  return { top: `${y}vh`, left: `${x}vw` };
};

const textStyle = (animationDelay) => css`
  position: absolute;
  ${randomPosition()};
  opacity: 0;
  animation: ${fadeInOut} ${animationDuration}s ease-in-out ${animationDelay}s
    infinite;
  font-family: "Doctor Glitch", sans-serif;

  @media (max-width: 320px) {
    font-size: 0.75rem;
  }

  @media (min-width: 321px) and (max-width: 375px) {
    font-size: 1.25rem;
  }

  @media (min-width: 376px) and (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1025px) {
    font-size: 3rem;
  }
`;

const TypeWriter = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    setElements(
      phrases.map((phrase, index) => ({
        text: phrase,
        delay: (index * animationDuration) / phrases.length,
      }))
    );
  }, []);

  return (
    <div
      css={css`
        position: relative;
        height: 40rem;
        width: 100%;
      `}
    >
      {elements.map((element, index) => (
        <div key={index} css={textStyle(element.delay)}>
          {element.text}
        </div>
      ))}
    </div>
  );
};

export default TypeWriter;
