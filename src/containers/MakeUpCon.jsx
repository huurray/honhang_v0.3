import React, { Component, Fragment } from 'react';
import MakeUpForm from '../components/MakeUpForm';
import PageNav from '../components/PageNav';

import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as listAllActions from '../modules/listAll';
import * as userActions from '../modules/user';

class MakeUpCon extends Component {
  state = {
    title: '',
    place: '',
    howMany: 0,
    content: '',
    kakao: '',
    date: null,
    dateNum: 0,
    focused: false,
    modalState: false,
    modalText: ''
  };

  onHandleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onDateChange = date => {
    this.setState({ date, dateNum: date._d.getTime() });
  };

  onFocusChange = focused => {
    this.setState({ focused });
  };

  hideSideModal = () => {
    this.setState({ modalState: false });
  };

  //textarea 줄바꿈 제한
  onHandleKeyDown = () => {
    const { content } = this.state;
    const rows = content.split('\n').length;
    const maxRows = 12;

    if (rows > maxRows) {
      let modifiedText = content.split('\n').slice(0, maxRows);
      this.setState({
        modalState: true,
        modalText: '글이 너무 길면 읽기 힘들어요 ㅠ',
        content: modifiedText.join('\n')
      });
    }
  };

  onInsert = () => {
    const db = firebase.firestore();
    const docRef = db.collection('donghang');

    const { title, place, howMany, content, date } = this.state;
    const { userData, history, listAllActions } = this.props;

    //check fill form
    if (
      title === '' ||
      place === '' ||
      howMany === 0 ||
      content === '' ||
      date === null
    ) {
      this.setState({
        modalState: true,
        modalText: '동행정보를 모두 기입해주세요.'
      });
    } else {
      const d = date._d;
      const dateLit = `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;
      const dNow = new Date();
      const dNowLit = `${dNow.getFullYear()}.${dNow.getMonth() + 1}.${dNow.getDate()}`;
      firebase.auth().onAuthStateChanged(function(user) {
        docRef
          .add({
            title,
            place,
            howMany,
            content,
            kakao: userData.kakaoId,
            date: dateLit,
            dateNum: date._d.getTime(),
            dateNow: dNowLit,
            uid: user.uid
          })
          .then(function(docRef) {
            console.log('Document written with ID: ', docRef.id);

            listAllActions.listUpAll();

            history.push('/boardall');
          })
          .catch(function(error) {
            console.error('Error adding document: ', error);
          });
      });
    }
  };

  render() {
    const { content, date, focused, modalState, modalText } = this.state;
    const { userData } = this.props;

    return (
      <Fragment>
        <PageNav
          title="동행 커뮤니티 만들기"
          location="동행모집"
          progressText="MAKE CHANNEL"
          progressTextSmall="안전한 동행 커뮤니티 만들기"
          firstImg="icon-id"
          secondImg="icon-document-active"
        />
        <MakeUpForm
          content={content}
          date={date}
          focused={focused}
          onDateChange={this.onDateChange}
          onFocusChange={this.onFocusChange}
          onHandleChange={this.onHandleChange}
          onInsert={this.onInsert}
          kakaoId={userData.kakaoId}
          modalState={modalState}
          modalText={modalText}
          hideSideModal={this.hideSideModal}
          onHandleKeyDown={this.onHandleKeyDown}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.user.toJS().data
});

const mapDispatchToProps = dispatch => ({
  listAllActions: bindActionCreators(listAllActions, dispatch),
  userActions: bindActionCreators(userActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MakeUpCon);
