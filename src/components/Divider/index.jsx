import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import './divider.scss';

function Divider(props) {
    const { offset, factor, speed } = props;

    return (
        <ParallaxLayer
            offset={offset}
            factor={factor}
            speed={speed}
        >
            <div className="divider" />
        </ParallaxLayer>
    );
}

export default Divider;
