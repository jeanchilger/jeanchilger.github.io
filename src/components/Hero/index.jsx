import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import './hero.scss';

function HeroSection(props) {
    const {
        title,
        subtitle,
        offset,
        factor,
    } = props;

    return (
        <ParallaxLayer
            offset={offset}
            speed={0.5}
            factor={factor}
        >
            <div className="container">
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
                    </ParallaxLayer>
                </div>
            </div>
        </ParallaxLayer>
    );
}

export default HeroSection;
