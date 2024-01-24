/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css, keyframes } from "@emotion/react";

const phrases = [
  "Développeur",
  "Persévérant",
  "Créatif",
  "Curieux",
  "Codeur",
  "Polyvalent",
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
  const padding = 50; // Marge de sécurité
  const maxWidth = window.innerWidth - padding;
  const maxHeight = window.innerHeight - padding;
  const x = Math.random() * maxWidth;
  const y = Math.random() * maxHeight;

  return { top: `${y}px`, left: `${x}px` };
};

const textStyle = (animationDelay) => css`
  position: absolute;
  ${randomPosition()};
  opacity: 0;
  animation: ${fadeInOut} ${animationDuration}s ease-in-out ${animationDelay}s
    infinite;
  font-family: "Doctor Glitch", sans-serif;
  font-size: clamp(
    1rem,
    2vw,
    3rem
  ); // Taille adaptable selon la largeur de l'écran
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

    const handleResize = () => {
      // Réinitialiser les éléments lors du redimensionnement
      setElements(
        phrases.map((phrase, index) => ({
          text: phrase,
          delay: (index * animationDuration) / phrases.length,
        }))
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      css={css`
        position: relative;
        height: 40rem;
        width: 100%;
        overflow: hidden;
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
