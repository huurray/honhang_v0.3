import React, { Component, Fragment } from 'react';
import AuthForm from '../components/AuthForm';
import PageNav from '../components/PageNav';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from '../modules/user';

class AuthCon extends Component {
  state = {
    name: '',
    age: 0,
    city: '',
    phone: '',
    kakaoId: '',
    kakaoBigImg: '',
    kakaoSmallImg: '',
    isKakaoLogin: false
  };

  onHandleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  //카카오 API window로 접근
  getKakaoInfo = () => {
    let Component = this;

    window.Kakao.init('ebc7930ec309165c494faf3f9e0837a2');
    // 카카오 로그인 버튼을 생성합니다.
    window.Kakao.Auth.createLoginButton({
      container: '#kakao-login-btn',
      success: function(authObj) {
        // 로그인 성공시, API를 호출합니다.
        window.Kakao.API.request({
          url: '/v1/user/me',
          success: function(res) {
            Component.setState({
              kakaoBigImg: res.properties.profile_image,
              kakaoSmallImg: res.properties.thumbnail_image,
              isKakaoLogin: true
            });
            console.log('kakaoKeyId', res.id);
          },
          fail: function(error) {
            console.log(JSON.stringify(error));
          }
        });
      },
      fail: function(err) {
        console.log(JSON.stringify(err));
      }
    });
  };

  onInsert = () => {
    const {
      name,
      age,
      city,
      phone,
      kakaoId,
      kakaoBigImg,
      kakaoSmallImg
    } = this.state;
    const { userActions } = this.props;

    userActions.postUser(
      name,
      age,
      city,
      phone,
      kakaoId,
      kakaoBigImg,
      kakaoSmallImg
    );
  };

  componentDidMount() {
    this.getKakaoInfo();
  }

  render() {
    const { isKakaoLogin } = this.state;
    return (
      <Fragment>
        <PageNav
          title="안전한 동행인 인증하기"
          location="신원 인증"
          progressText="AUTHENTICATION"
          progressTextSmall="본 인증은 최초 한번만 진행됩니다!"
          color="true"
          firstImg="icon-id-active"
          secondImg="icon-document"
        />
        <AuthForm
          onHandleChange={this.onHandleChange}
          onInsert={this.onInsert}
          isKakaoLogin={isKakaoLogin}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.user.toJS().data,
  loading: state.user.get('loading')
});
const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthCon);
