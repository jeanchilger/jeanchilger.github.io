import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import './hero.scss';

function HeroSection(props) {
    const {
        title,
        subtitle,
        offset,
        factor,
        children
    } = props;

    return (
        <ParallaxLayer
            offset={offset}
            speed={0.5}
            factor={factor}
        >
            <div className="container">
                <svg
                    className="hero__corner-waves"
                    width="684"
                    height="520"
                    viewBox="0 0 342 260"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient
                            id="mainGradient"
                            x1="100%"
                            y1="100%"
                        >
                            <stop
                                offset="0%"
                                stopColor="lightblue"
                            >
                                <animate
                                    attributeName="stop-color"
                                    values="#7279da;#5ea2c9;#9574c0;#60b976;#f06e6e;#fc9362;#fcd15c;#fc9362;#f06e6e;#60b976;#9574c0;#5ea2c9;#7279da"
                                    dur="40s"
                                    repeatCount="indefinite"
                                />
                            </stop>

                            <stop
                                offset="100%"
                                stopColor="lightblue"
                            >
                                <animate
                                    attributeName="stop-color"
                                    values="#5ea2c9;#9574c0;#60b976;#f06e6e;#fc9362;#fcd15c;#7279da;#fcd15c;#fc9362;#f06e6e;#60b976;#9574c0;#5ea2c9"
                                    dur="40s"
                                    repeatCount="indefinite"
                                />
                            </stop>
                        </linearGradient>
                    </defs>
                    <g className="corner-waves-0">
                        <path
                            className="bottom-wave"
                            d="M342 0H1.63302C1.63302 0 -4.07346 46.6783 7 74.5C19.7488 106.531 32.8548 111.246 67 116C106.5 121.5 112.5 112.687 141 136C173.022 162.194 144.834 179.271 178 204C209.947 227.82 228.584 207.423 267.5 216C300.913 223.364 342 260 342 260V0Z"
                            fill="url(#mainGradient)"
                            fillOpacity="0.51"
                        />
                        <path
                            className="top-wave"
                            d="M342 0H24C24 0 6.49999 36 42.5 73C78.5 110 117 86 147 108C177 130 162.516 163.752 191 186.5C220.047 209.698 239.14 187.764 275.5 195.5C306.296 202.052 342 229 342 229V0Z"
                            fill="url(#mainGradient)"
                        />
                    </g>
                </svg>
                <div className="hero">
                    <ParallaxLayer
                        offset={offset}
                        speed={0.8}
                        factor={factor / 2}
                    >
                        <h1 className="hero__title">
                            {title}
                        </h1>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={offset + 0.2}
                        speed={0.5}
                        factor={factor / 2}
                    >
                        <h4 className="hero__subtitle">
                            {subtitle}
                        </h4>

                        <div className="hero__buttons p-1">
                            {children.map((node) => (
                                <div className="p-1 d-inline-block">
                                    {node}
                                </div>
                            ))}
                        </div>

                    </ParallaxLayer>
                </div>
            </div>
        </ParallaxLayer>
    );
}

export default HeroSection;
