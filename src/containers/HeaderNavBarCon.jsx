import React, { Component } from 'react';
import HeaderNavBar from '../components/HeaderNavBar';

import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as statusActions from '../modules/status';
import * as userActions from '../modules/user';
import * as listAllActions from '../modules/listAll';

class HeaderNavBarCon extends Component {
  state = {
    isBlack: this.props.isBlack,
    profile: false,
    logoImg: 'logo-white',
    iconUser: 'icon-user-white',
    downArrow: 'down-arrow',
    onScrollDown: false
  };

  getListAll = () => {
    const { listAllActions } = this.props;
    listAllActions.listUpAll();
  }

  onClickProfile = () => {
    this.setState({ profile: !this.state.profile });
  };

  toggleColorBlack = () => {
    this.setState({
      logoImg: 'logo-black',
      iconUser: 'icon-user',
      downArrow: 'down-arrow-black',
      onScrollDown: true
    });
  };

  toggleColorWhite = () => {
    this.setState({
      logoImg: 'logo-white',
      iconUser: 'icon-user-white',
      downArrow: 'down-arrow',
      onScrollDown: false
    });
  };

  toggleLogin = () => {
    const { loginStatus, statusActions, history, userActions } = this.props;
    if (loginStatus === '로그인') {
      history.push('/signin');
    } else if (loginStatus === '로그아웃') {
      firebase
        .auth()
        .signOut()
        .then(function() {
          statusActions.isLogin();
          userActions.getUser();
        });
    }
  };

  hasUserData = () => {
    const { userData, loginStatus, history } = this.props;
    if (loginStatus === '로그인') {
      history.push('/signin');
    } else if (loginStatus === '로그아웃') {
      if (userData.name === undefined) {
        history.push('/auth');
      } else {
        history.push('/makeup');
      }
    }
  };

  componentDidMount() {
    //change NavBar on Scroll Event
    let scrollState = true;
    let toggleColorBlackFunc = () => this.toggleColorBlack();
    let toggleColorWhiteFunc = () => this.toggleColorWhite();

    if (this.state.isBlack) {
      toggleColorBlackFunc();
    } else {
      window.addEventListener('scroll', function() {
        if (this.pageYOffset > 100 && scrollState === true) {
          toggleColorBlackFunc();
          scrollState = false;
        } else if (this.pageYOffset <= 100 && scrollState === false) {
          toggleColorWhiteFunc();
          scrollState = true;
        }
      });
    }
  }

  render() {
    const { logoImg, iconUser, downArrow, onScrollDown, profile } = this.state;
    const { history, loginStatus } = this.props;

    return (
      <div>
        <HeaderNavBar
          onScrollDown={onScrollDown}
          logoImg={logoImg}
          iconUser={iconUser}
          downArrow={downArrow}
          onClickProfile={this.onClickProfile}
          isProfileOn={profile}
          history={history}
          loginStatus={loginStatus}
          toggleLogin={this.toggleLogin}
          hasUserData={this.hasUserData}
          getListAll={this.getListAll}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginStatus: state.status.get('loginStatus'),
  userData: state.user.toJS().data
});
const mapDispatchToProps = dispatch => ({
  statusActions: bindActionCreators(statusActions, dispatch),
  userActions: bindActionCreators(userActions, dispatch),
  listAllActions: bindActionCreators(listAllActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderNavBarCon);
