import React from 'react';
import { ThemeProvider } from 'styled-components';

import { FullScreenProvider } from './src/components/providers/FullScreenProvider';

export const wrapRootElement = ({ element }) => {
  return (
    <FullScreenProvider>
      <ThemeProvider theme={{ color: { primary: '#deae47' } }}>{element}</ThemeProvider>
    </FullScreenProvider>)
};
