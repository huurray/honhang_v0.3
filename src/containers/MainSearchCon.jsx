import React, { Component } from 'react';

import MainSearch from '../components/MainSearch';

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

  componentDidMount() {
    setInterval(this.onImageSlide, 10000);
  }

  render() {

    const { imgNum, imgArray } = this.state;

    return (
      <div>
        <MainSearch imgNum={imgNum} imgArray={imgArray} />
      </div>
    );
  }
}

export default MainSearchCon;
