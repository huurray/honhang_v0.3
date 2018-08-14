import React, { Component } from 'react';
import HeaderNavBar from '../components/HeaderNavBar';

class HeaderNavBarCon extends Component {
  state = {
    isBlack: this.props.isBlack,
    profile: false,
    logoImg: 'logo-white',
    iconUser: 'icon-user-white',
    downArrow: 'down-arrow',
    onScrollDown: false,
  };

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
    const { history } = this.props;
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
        />
      </div>
    );
  }
}

export default HeaderNavBarCon;
