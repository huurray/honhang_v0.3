import React from 'react';
import { Route } from 'react-router-dom';
import { Main } from './pages';
import { ThemeProvider } from 'styled-components';
import theme from './styles/themes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Route exact path="/" component={Main} />
      </div>
    </ThemeProvider>
  );
};

export default App;
