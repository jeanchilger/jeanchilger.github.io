import styled, { ThemeProvider } from 'styled-components';
import { PageProps } from 'gatsby';
import * as React from 'react';

const LayoutContainer = styled.div`
  font-family: adobe-garamond-pro, sans-serif;
`;

const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    info: '#17a2b8',
    warning: '#ffc107',
    danger: '#dc3545',
    light: '#f8f9fa',
    dark: '#343a40',
    white: '#ffffff',
  },
};

const Layout: React.FC<PageProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutContainer className='container-fluid'>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            {children}
          </div>
        </div>
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;