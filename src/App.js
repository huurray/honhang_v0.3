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
  Password,
  QnA,
  Agreement,
  Privacy,
  MyPage,
  Local
} from './pages';
import withStyle from './styles';
import withGetData from './hoc/withGetData'

const App = () => {
  return (
    <div>
      <Route exact path="/" component={withGetData(Main)} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/password" component={Password} />
      <Route path="/boardall" component={withGetData(BoardAll)} />
      <Route path="/board" component={withGetData(Board)} />
      <Route path="/makeup" component={withGetData(MakeUp)} />
      <Route path="/auth" component={withGetData(Auth)} />
      <Route path="/qna" component={withGetData(QnA)} />
      <Route path="/agreement" component={withGetData(Agreement)} />
      <Route path="/privacy" component={withGetData(Privacy)} />
      <Route path="/mypage" component={withGetData(MyPage)} />
      <Route path="/local" component={withGetData(Local)} />
    </div>
  );
};

export default withStyle(App);
