import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import './footer.scss';

function Footer(props) {
    const { offset, factor } = props;

    return (
        <ParallaxLayer
            offset={offset}
            factor={factor}
            speed={0.3}
        >
            <div>
                <div className="footer">
                    <div className="container">
                        <div className="footer__bottom-area">
                            <div className="container">
                                <a
                                    href="https://github.com/jeanchilger"
                                    className="link link--primary link--gradient footer__link"
                                    target="blank"
                                >
                                    Follow me on Gihub!!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="contact-wave"
                    viewBox="0 0 800 338.05"
                    preserveAspectRatio="none"
                    className="footer__svg"
                >
                    <path>
                        <animate
                            attributeName="d"
                            values="
                                M 0 100
                                Q 250 50 400 200
                                Q 550 350 800 300
                                L 800 0
                                L 0 0
                                L 0 100 Z;
                                M 0 100
                                Q 200 150 400 200
                                Q 600 250 800 300
                                L 800 0
                                L 0 0
                                L 0 100 Z;
                                M 0 100
                                Q 150 350 400 200
                                Q 650 50 800 300
                                L 800 0
                                L 0 0
                                L 0 100 Z"
                            repeatCount="indefinite"
                            dur="30s"
                        />
                    </path>
                </svg>
            </div>
        </ParallaxLayer>
    );
}

export default Footer;
