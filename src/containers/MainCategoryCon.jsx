import React, { Component } from 'react';
import MainCategory from '../components/MainCategory';

class MainCategoryCon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle1: false,
      toggle2: false,
      toggle3: false
    };

    this.onMouseOver1 = () => {
      this.setState({
        toggle1: true,
        toggle2: false,
        toggle3: false
      });
    };
    this.onMouseLeave1 = () => {
      this.setState({ toggle1: false });
    };
    this.onMouseOver2 = () => {
      this.setState({
        toggle1: false,
        toggle2: true,
        toggle3: false
      });
    };
    this.onMouseLeave2 = () => {
      this.setState({ toggle2: false });
    };
    this.onMouseOver3 = () => {
      this.setState({
        toggle1: false,
        toggle2: false,
        toggle3: true
      });
    };
    this.onMouseLeave3 = () => {
      this.setState({ toggle3: false });
    };
  }

  render() {
    const { toggle1, toggle2, toggle3 } = this.state;
    return (
      <div>
        <MainCategory
          onMouseOver1={this.onMouseOver1}
          onMouseLeave1={this.onMouseLeave1}
          toggle1={toggle1}
          onMouseOver2={this.onMouseOver2}
          onMouseLeave2={this.onMouseLeave2}
          toggle2={toggle2}
          onMouseOver3={this.onMouseOver3}
          onMouseLeave3={this.onMouseLeave3}
          toggle3={toggle3}
        />
      </div>
    );
  }
}

export default MainCategoryCon;
