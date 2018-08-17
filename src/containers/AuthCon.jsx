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
    isKakaoLogin: false,
    check1: false,
    check2: false,
    check3: false,
    checkAll: false,
    modalState: false,
    modalText: ''
  };

  onHandleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  //카카오 API window로 접근
  getKakaoInfo = () => {
    //이니셜라이즈 중복을 피해주기 위함임
    window.Kakao.cleanup();
    window.Kakao.init('ebc7930ec309165c494faf3f9e0837a2');

    // 카카오 로그인 버튼을 생성합니다.
    let Component = this;
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

  //checkbox all
  onCheckboxChange = e => {
    this.setState({ [e.target.name]: e.target.checked });
  };
  onCheckboxAllChange = () => {
    const { checkAll } = this.state;
    this.setState({ checkAll: !checkAll });
    if (checkAll) {
      this.setState({ check1: false, check2: false, check3: false });
    } else {
      this.setState({ check1: true, check2: true, check3: true });
    }
  };

  hideSideModal = () => {
    this.setState({ modalState: false });
  };

  onInsert = () => {
    const {
      name,
      age,
      city,
      phone,
      kakaoId,
      kakaoBigImg,
      kakaoSmallImg,
      check1,
      check2,
      check3
    } = this.state;
    const { userActions, history } = this.props;
    //check fill form
    if (
      name === '' ||
      age === 0 ||
      city === '' ||
      phone === '' ||
      kakaoId === ''
    ) {
      this.setState({
        modalState: true,
        modalText: '신상정보를 모두 기입해주세요.'
      });
    } else if (kakaoBigImg === '') {
      this.setState({
        modalState: true,
        modalText: '카카오 프로필 연동을 해주세요.'
      });
    } else if (check1 === false || check2 === false || check3 === false) {
      this.setState({
        modalState: true,
        modalText: '약관에 모두 동의 해주세요.'
      });
    } else {
      userActions.postUser(
        name,
        age,
        city,
        phone,
        kakaoId,
        kakaoBigImg,
        kakaoSmallImg
      );
      history.push('/makeup');
    }
  };

  componentDidMount() {
    this.getKakaoInfo();
  }

  render() {
    const {
      isKakaoLogin,
      check1,
      check2,
      check3,
      checkAll,
      modalState,
      modalText
    } = this.state;
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
          check1={check1}
          check2={check2}
          check3={check3}
          checkAll={checkAll}
          onCheckboxChange={this.onCheckboxChange}
          onCheckboxAllChange={this.onCheckboxAllChange}
          modalState={modalState}
          modalText={modalText}
          hideSideModal={this.hideSideModal}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.user.toJS().data
});
const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthCon);
