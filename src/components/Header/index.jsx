import React from 'react';
import { Link } from 'gatsby';

function Header() {
    return (
        <header>
            <h1>Jean Carlo Hilger</h1>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>

                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
