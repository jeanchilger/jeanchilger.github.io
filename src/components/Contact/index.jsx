import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import './contact.scss';

function ContactSection(props) {
    const { offset, factor } = props;

    return (
        <ParallaxLayer
            offset={offset}
            factor={factor}
            speed={1}
        >
            <div className="container">
                <div className="contact">
                    <h2 className="title title--dark">
                        Reach me Out!
                    </h2>

                    <div className="contact__info">
                        Reprehenderit mollit nostrud non dolor incididunt tempor commodo elit labore incididunt commodo.
                    </div>
                </div>
            </div>
        </ParallaxLayer>
    );
}

export default ContactSection;
