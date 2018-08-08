import React from 'react';
import { Route } from 'react-router-dom';
import { Main } from './pages';

import withStyle from './styles';

const App = () => {
  return (
    <Route exact path="/" component={Main} />
  );
};

export default withStyle(App);
