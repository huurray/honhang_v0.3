import React, { Component } from 'react';
import MainSearch from '../components/MainSearch';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as searchActions from '../modules/search';

class MainSearchCon extends Component {
  state = {
    //image slider
    imgArray: [null, null, null],
    imgNum: 1,
    imageLen: 3,
    //search
    searchValue: '',
    //datepicker
    date: null,
    dateNum: 0,
    focused: false,
    //modal
    modalText: '',
    modalState: false
  };

  //image slide
  onImageSlide = () => {
    const { imgNum, imageLen } = this.state;

    if (imgNum < imageLen) {
      this.setState({ imgNum: imgNum + 1 });
    } else if (imgNum === imageLen) {
      this.setState({ imgNum: 1 });
    }
  };

  onHandleChange = e => {
    this.setState({ searchValue: e.target.value });
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

  onHandleKeyPress = e => {
    if (e.key === 'Enter') {
      this.onInsert();
    }
  };

  onInsert = () => {
    const { history, searchActions } = this.props;
    const { searchValue } = this.state;

    if (searchValue === '') {
      this.setState({
        modalState: true,
        modalText: '검색어를 입력해주세요!'
      });
    } else {
      searchActions.search(searchValue);
      history.push('/board');
    }
  };

  componentDidMount() {
    setInterval(this.onImageSlide, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.onImageSlide);
  }

  render() {
    const {
      imgNum,
      imgArray,
      searchValue,
      date,
      focused,
      modalText,
      modalState
    } = this.state;

    return (
      <div>
        <MainSearch
          //image slider
          imgNum={imgNum}
          imgArray={imgArray}
          //search
          onHandleChange={this.onHandleChange}
          placeKeyword={searchValue}
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
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  searchActions: bindActionCreators(searchActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSearchCon);
