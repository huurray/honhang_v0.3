import React, { Component, Fragment } from 'react';
import MakeUpForm from '../components/MakeUpForm';
import PageNav from '../components/PageNav';

import firebase from 'firebase';

class MakeUpCon extends Component {
  state = {
    title: '',
    place: '',
    howMany: 0,
    content: '',
    kakao: '',
    date: null,
    dateNum: 0,
    focused: false
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

  onInsert = () => {
    const db = firebase.firestore();
    const docRef = db.collection('donghang');

    const { title, place, howMany, content, kakao, date } = this.state;

    const dateLiteral = `${date._d.getFullYear()}/${date._d.getMonth()+1}/${date._d.getDate()}`;

    docRef
      .add({
        title,
        place,
        howMany,
        content,
        kakao,
        date: dateLiteral,
        dateNum: date._d.getTime()
      })
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  };

  render() {
    const { date, focused } = this.state;

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
          date={date}
          focused={focused}
          onDateChange={this.onDateChange}
          onFocusChange={this.onFocusChange}
          onHandleChange={this.onHandleChange}
          onInsert={this.onInsert}
        />
      </Fragment>
    );
  }
}

export default MakeUpCon;
