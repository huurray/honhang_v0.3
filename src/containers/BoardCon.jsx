import React, { Component } from 'react';
import styled from 'styled-components';

import BoardList from '../components/BoardList';
import BoardDetail from '../components/BoardDetail';
import BoardSort from '../components/BoardSort';
import Loading from '../common/Loading';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as listActions from '../modules/list';
import * as searchActions from '../modules/search';

import firebase from 'firebase';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

class BoardCon extends Component {
  state = {
    selectIndex: -1,
    isResearch: false,
    reSearchValue: '',
    date: null,
    dateNum: 0,
    focused: false,
    modalText: '',
    modalState: false,
    kakaoInfo: {},
    profileModal: false
  };

  //kakao정보 가져오기
  findKakaoUser = kakaoId => {
    const db = firebase.firestore();
    const docRef = db.collection('users');

    let selectedUser = {};
    return docRef
      .where('kakaoId', '==', kakaoId)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          const data = doc.data();
          selectedUser = {
            name: data.name,
            age: data.age,
            city: data.city,
            phone: data.phone,
            kakaoId: data.kakaoId,
            kakaoBigImg: data.kakaoBigImg,
            kakaoSmallImg: data.kakaoSmallImg,
            email: data.email,
            uid: data.uid
          };
        });
        return selectedUser;
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
      });
  };

  onSelect = i => {
    this.setState({ selectIndex: i, profileModal: false });
  };

  toggleResearch = () => {
    const { isResearch } = this.state;
    this.setState({ isResearch: !isResearch });
  };

  onHandleChange = e => {
    this.setState({ reSearchValue: e.target.value });
  };

  onDateChange = date => {
    this.setState({ date, dateNum: date._d.getTime() });
  };

  onFocusChange = focused => {
    this.setState({ focused });
  };

  onHandleKeyPress = e => {
    if (e.key === 'Enter') {
      this.onInsert();
    }
  };

  hideSideModal = () => {
    this.setState({ modalState: false });
  };

  onInsert = () => {
    const { listActions, searchActions } = this.props;
    const { reSearchValue } = this.state;

    if (reSearchValue === '') {
      this.setState({
        modalState: true,
        modalText: '검색어를 입력해주세요!'
      });
    } else {
      searchActions.search(reSearchValue);
      listActions.listUp(reSearchValue);
    }
  };

  onShowProfile = async kakaoId => {
    const getKakaoInfo = await this.findKakaoUser(kakaoId);
    this.setState({ kakaoInfo: getKakaoInfo, profileModal: true });
  };

  render() {
    const { searchValue, dataList } = this.props;
    const {
      selectIndex,
      isResearch,
      reSearchValue,
      date,
      focused,
      modalText,
      modalState,
      kakaoInfo,
      profileModal
    } = this.state;

    return (
      <Container>
        {dataList.loading && <Loading top />}
        <BoardSort
          searchValue={searchValue}
          //research
          isResearch={isResearch}
          toggleResearch={this.toggleResearch}
          //search
          onHandleChange={this.onHandleChange}
          placeKeyword={reSearchValue}
          //datepicker
          date={date}
          focused={focused}
          onDateChange={this.onDateChange}
          onFocusChange={this.onFocusChange}
          //modal
          modalText={modalText}
          modalState={modalState}
          hideSideModal={this.hideSideModal}
          //etc
          onHandleKeyPress={this.onHandleKeyPress}
          onInsert={this.onInsert}
          //show profile
          kakaoInfo={kakaoInfo}
          profileModal={profileModal}
        />
        <BoardList
          dataList={dataList}
          onSelect={this.onSelect}
          selectIndex={selectIndex}
        />
        <BoardDetail
          dataList={dataList}
          selectIndex={selectIndex} 
          //show profile
          onShowProfile={this.onShowProfile}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  searchValue: state.search.get('searchValue'),
  loading: state.search.get('loading'),
  dataList: state.list.toJS()
});
const mapDispatchToProps = dispatch => ({
  listActions: bindActionCreators(listActions, dispatch),
  searchActions: bindActionCreators(searchActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardCon);
