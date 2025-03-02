import { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <h1>Jean Carlo Hilger</h1>
    </div>
  );
};

export const Head: HeadFC = () => <title>Jean Carlo Hilger</title>

export default IndexPage;