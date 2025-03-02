import styled from 'styled-components';
import { PageProps, HeadFC } from 'gatsby';
import * as React from 'react';

import 'bootstrap/scss/bootstrap.scss';

const LayoutContainer = styled.div`
  font-family: 'adobe-garamond-pro', serif;
`;

const Layout: React.FC<PageProps> = ({ children }) => {
  return (
    <LayoutContainer className='container-fluid'>
      {children}
    </LayoutContainer>
  );
};

export const Head: HeadFC = () => <link rel="stylesheet" href="https://use.typekit.net/ebr3tlq.css"></link>

export default Layout;