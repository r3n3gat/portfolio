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
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  return { top: `${y}%`, left: `${x}%` };
};

const textStyle = (animationDelay) => css`
  position: absolute;
  ${randomPosition()};
  opacity: 0;
  animation: ${fadeInOut} ${animationDuration}s ease-in-out ${animationDelay}s
    infinite;
  font-family: "Doctor Glitch", sans-serif;

  @media (min-width: 768px) {
    font-size: 2rem; // Taille moyenne pour les tablettes
  }

  @media (min-width: 1024px) {
    font-size: 3rem; // Taille plus grande pour les écrans d'ordinateur
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
