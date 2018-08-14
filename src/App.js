import React from 'react';
import { Route } from 'react-router-dom';
import {
  Main,
  BoardAll,
  Board,
  MakeUp,
  Auth,
  SignIn,
  SignUp,
  Password
} from './pages';
import withStyle from './styles';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/password" component={Password} />
      <Route path="/boardall" component={BoardAll} />
      <Route path="/board" component={Board} />
      <Route path="/makeup" component={MakeUp} />
      <Route path="/auth" component={Auth} />
    </div>
  );
};

export default withStyle(App);
