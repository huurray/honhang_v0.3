import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './themes';

export default WarrapedComponent => {
  return class extends React.Component {
    render() {
      baseStyles();
      return (
        <ThemeProvider theme={theme}>
          <WarrapedComponent {...this.props} />
        </ThemeProvider>
      );
    }
  };
};
