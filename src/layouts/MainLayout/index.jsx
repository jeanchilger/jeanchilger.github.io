import React from 'react';
import { Helmet } from 'react-helmet';
import { Parallax } from 'react-spring/renderprops-addons';
import '../../assets/scss/main.scss';
import './main-layout.scss';

export default function MainLayout(props) {
    const { children, pages } = props;

    return (
        <div>
            <Helmet>
                <title>Jean Carlo Hilger</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Parallax
                pages={pages}
            >
                {children}
            </Parallax>
        </div>
    );
}
