import * as React from 'react';
import Layout from './src/components/Layout';

import './src/styles/main.scss';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

