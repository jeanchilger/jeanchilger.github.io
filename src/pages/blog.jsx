import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../layouts/BlogLayout';
import Card from '../components/Card';

export const query = graphql`
    {
        allMdx(
            filter: {frontmatter: {published: {eq: true}}},
            sort: {order: DESC, fields: frontmatter___date})
        {
            nodes {
                frontmatter {
                    date
                    title
                }
                slug
                id
            }
        }
    }
`;

function BlogPage({ data }) {
    return (
        <Layout>
            <div className="container">
                <h1 className="title title--primary">Latest Blog Posts</h1>
                <h2 className="subtitle subtitle--light">Work In Progress</h2>

                {data.allMdx.nodes.map(({ frontmatter }) => (
                    <div className="row">
                        <div className="col-12 p-2">
                            <Card
                                title={frontmatter.title}
                                content=""
                            />
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export default BlogPage;
