import React, { Component } from 'react';
import HeaderNavBar from '../components/HeaderNavBar';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as stateActions from '../modules/status';


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
    //로그인 상태 체크
    const { stateActions} = this.props;
    stateActions.isLogin();
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
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginStatus: state.status.get("loginStatus")
});
const mapDispatchToProps = dispatch => ({
  stateActions: bindActionCreators(stateActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderNavBarCon);
