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
    modalState: false
  };

  onSelect = i => {
    this.setState({ selectIndex: i });
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
    const { history, listActions, searchValue, searchActions } = this.props;
    const { reSearchValue } = this.state;

    if (reSearchValue === '') {
      this.setState({
        modalState: true,
        modalText: '검색어를 입력해주세요!'
      });
    } else {
      searchActions.search(reSearchValue);
      history.push('/board');

      listActions.listUp(searchValue);

      //다시 고쳐야됌
    }
  };

  componentDidMount() {
    const { searchValue, listActions } = this.props;
    listActions.listUp(searchValue);
    console.log(searchValue);
  }

  render() {
    const { searchValue, dataList } = this.props;
    const {
      selectIndex,
      isResearch,
      reSearchValue,
      date,
      focused,
      modalText,
      modalState
    } = this.state;
    
    console.log(searchValue);

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
        />
        <BoardList dataList={dataList} onSelect={this.onSelect} />
        <BoardDetail dataList={dataList} selectIndex={selectIndex} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  searchValue: state.search.get('searchValue'),
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
