import React, { Component } from 'react';
import MainSearch from '../components/MainSearch';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as searchActions from '../modules/search';
import * as inputActions from '../modules/input';

class MainSearchCon extends Component {
  state = {
    imgArray: [null, null, null],
    imgNum: 1,
    imageLen: 3
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

  //searchValue dispatch

  onHandleChange = e => {
    const { inputActions } = this.props;
    inputActions.inputPlaceKeyword(e.target.value);
  };

  onInsert = () => {
    const { searchActions, placeKeyword } = this.props;
    searchActions.search(placeKeyword);
  };

  componentDidMount() {
    setInterval(this.onImageSlide, 10000);
  }

  render() {
    const { imgNum, imgArray } = this.state;
    const { placeKeyword } = this.props;

    return (
      <div>
        <MainSearch
          imgNum={imgNum}
          imgArray={imgArray}
          placeKeyword={placeKeyword}
          onHandleChange={this.onHandleChange}
          onInsert={this.onInsert}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  placeKeyword: state.input.get('placeKeyword')
});
const mapDispatchToProps = dispatch => ({
  inputActions: bindActionCreators(inputActions, dispatch),
  searchActions: bindActionCreators(searchActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSearchCon);
