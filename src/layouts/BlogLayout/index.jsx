import React from 'react';
import { Helmet } from 'react-helmet';

function BlogLayout({ children }) {
    return (
        <div>
            <Helmet>
                <title>Jean Carlo Hilger</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            {children}
        </div>
    );
}

export default BlogLayout;
