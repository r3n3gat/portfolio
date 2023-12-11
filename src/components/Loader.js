/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css, keyframes } from "@emotion/react";

const generateRandomCode = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const length = Math.random() > 0.5 ? Math.floor(Math.random() * 180) : 0;
  return Array.from({ length }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join("");
};

const loaderStyle = css`
  // ... (styles inchangés)
`;

const cascadeAnimation = keyframes`
  // ... (animation inchangée)
`;

const lineStyle = css`
  // ... (styles inchangés)
`;

let lineCounter = 0; // Compteur global pour les lignes

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const numLines = 70; // Un nombre raisonnable de lignes
    for (let i = 0; i < numLines; i++) {
      setLines((lines) => [
        ...lines,
        {
          id: `line-${lineCounter++}`,
          code: generateRandomCode(),
          delay: Math.random() * 2,
        },
      ]);
    }

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) {
    return null;
  }

  return (
    <div css={loaderStyle}>
      {lines.map((line) => (
        <div
          key={line.id}
          css={lineStyle}
          style={{ animationDelay: `${line.delay}s` }}
        >
          {line.code}
        </div>
      ))}
    </div>
  );
};

export default Loader;
