import React, { Component } from 'react';
import HeaderNavBar from '../components/HeaderNavBar';

import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as statusActions from '../modules/status';
import * as userActions from '../modules/user';


class HeaderNavBarCon extends Component {
  state = {
    isBlack: this.props.isBlack,
    profile: false,
    logoImg: 'logo-white',
    iconUser: 'icon-user-white',
    downArrow: 'down-arrow',
    onScrollDown: false,
  };

  componentWillMount() {
    const { statusActions, userActions } = this.props;
    //로그인 상태 체크
    statusActions.isLogin();
    //유저 정보 가져오기
    userActions.getUser();
  }

  onClickProfile = () => {
    this.setState({ profile: !this.state.profile });
  }

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
    const {loginStatus,statusActions, history} = this.props;
    if(loginStatus === "로그인") {
      history.push('/signin')
    } else if (loginStatus === "로그아웃") {
      firebase.auth().signOut().then(function () {
        statusActions.isLogin();
      });
    }
  }

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
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginStatus: state.status.get("loginStatus")
});
const mapDispatchToProps = dispatch => ({
  statusActions: bindActionCreators(statusActions, dispatch),
  userActions: bindActionCreators(userActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderNavBarCon);
