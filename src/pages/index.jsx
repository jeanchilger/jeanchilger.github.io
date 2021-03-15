import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Divider from '../components/Divider';
import Footer from '../components/Footer';

function HomePage() {
    return (
        <Layout pages={3}>
            <Hero
                title="Jean Carlo Hilger"
                subtitle="Computer Science Student"
                offset={0}
                factor={1}
            >
                <Link to="/blog" className="btn btn--secondary btn--outline">
                    Blog
                </Link>

                <Link to="/publications" className="btn btn--secondary btn--outline">
                    Publications
                </Link>
            </Hero>

            <Divider
                offset={0.9}
                factor={1}
                speed={0.5}
            />

            <Contact
                id="contact"
                offset={1}
                factor={1}
            />

            <Footer
                offset={2}
                factor={1}
            />
        </Layout>
    );
}

export default HomePage;
