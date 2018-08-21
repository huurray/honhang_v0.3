import React, { Component, Fragment } from 'react';
import QnAForm from '../components/QnAForm';
import PageNav from '../components/PageNav';
import Footer from '../components/Footer';

class QnACon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: [1, 2, 3, 4, 5],
      menuIndex: 0,
      contentIndex: -1
    };

    this.onClickMenu = i => {
      this.setState({ menuIndex: i });
    };

    this.onClickList = i => {
      const { contentIndex } = this.state;
      if (contentIndex === i) {
        this.setState({ contentIndex: 999 });
      } else {
        this.setState({ contentIndex: i });
      }
    };
  }

  render() {
    const { num, menuIndex, contentIndex } = this.state;

    return (
      <Fragment>
        <PageNav title="자주 하는 질문과 답변" location="QnA" shutProgress />
        <QnAForm
          onClickMenu={this.onClickMenu}
          onClickList={this.onClickList}
          num={num}
          menuIndex={menuIndex}
          contentIndex={contentIndex}
        />
        <Footer />
      </Fragment>
    );
  }
}

export default QnACon;
