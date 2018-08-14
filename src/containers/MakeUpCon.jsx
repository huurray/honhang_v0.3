import React, { Component, Fragment } from 'react';
import MakeUpForm from '../components/MakeUpForm';
import PageNav from '../components/PageNav';

class MakeUpCon extends Component {
  render() {
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
        <MakeUpForm/>
      </Fragment>
    );
  }
}

export default MakeUpCon;