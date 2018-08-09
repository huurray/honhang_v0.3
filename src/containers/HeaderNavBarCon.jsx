import React, { Component } from 'react';
import HeaderNavBar from '../components/HeaderNavBar';

class HeaderNavBarCon extends Component {
  state = {
    logoImg: 'logo-white',
    iconUser: 'icon-user-white',
    downArrow: 'down-arrow',
    onScrollDown: false
  };

  componentDidMount() {
    //change NavBar on Scroll Event
    let scrollState = true;
    let HeaderNavBar = this;
    window.addEventListener('scroll', function() {
  
      if (this.pageYOffset > 100 && scrollState === true) {
        HeaderNavBar.setState({
          logoImg: 'logo-black',
          iconUser: 'icon-user',
          downArrow: 'down-arrow-black',
          onScrollDown: true
        });
        scrollState = false;
      } else if (this.pageYOffset <= 100 && scrollState === false) {
        HeaderNavBar.setState({
          logoImg: 'logo-white',
          iconUser: 'icon-user-white',
          downArrow: 'down-arrow',
          onScrollDown: false
        });
        scrollState = true;
      }
    });
  }

  render() {
    const { logoImg, iconUser, downArrow, onScrollDown } = this.state;

    return (
      <div>
        <HeaderNavBar
          onScrollDown={onScrollDown}
          logoImg={logoImg}
          iconUser={iconUser}
          downArrow={downArrow}
        />
      </div>
    );
  }
}

export default HeaderNavBarCon;
