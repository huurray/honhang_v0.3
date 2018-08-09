import React from 'react';
import { Route } from 'react-router-dom';
import { Main, BoardAll, Board } from './pages';
import withStyle from './styles';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/boardall" component={BoardAll} />
      <Route path="/board" component={Board} />
    </div>
  );
};

export default withStyle(App);
