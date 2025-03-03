import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

const AnimatedLinesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  @keyframes curveArrive {
    0% {
      stroke-dasharray: 200 200;
      stroke-dashoffset: 200;
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      stroke-dasharray: 200 200;
      stroke-dashoffset: 0;
      opacity: 0;
    }
  }
`;

const AnimatedLinePath = styled.path`
  stroke-dasharray: 200 200;
  stroke-dashoffset: 200;
  animation: curveArrive 2s ease-in-out forwards;
`;

const AnimatedLine: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  });

  function generateRandomPath() {
    const startX = Math.random() * 200; 
    const startY = -10; 
    const controlX1 = startX + (Math.random() * 50 - 25); 
    const controlY1 = 50;
    const controlX2 = startX + (Math.random() * 50 - 25);
    const controlY2 = 150;
    const endX = startX + (Math.random() * 20 - 10); 
    const endY = 210;

    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    
    return `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`;
  }

  return (
    isVisible &&
      <AnimatedLinePath
        d={generateRandomPath()}
        fill="none"
        stroke="#959fd34a"
        strokeWidth="0.5"
      />
  );
};

const AnimatedLines: React.FC = () => {
  return (
    <AnimatedLinesContainer>
      <svg
        viewBox='0 0 200 200'
        width='200vw'
        height='200vh'
        preserveAspectRatio="none"
      >
        <AnimatedLine></AnimatedLine>
      </svg>
    </AnimatedLinesContainer>
  );
};

export default AnimatedLines;