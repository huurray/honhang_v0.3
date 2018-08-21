import React, { Component } from 'react';
import MyPageForm from '../components/MyPageForm';
import NeedAuth from '../components/NeedAuth';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as statusActions from '../modules/status';
import * as userActions from '../modules/user';

import firebase from 'firebase';

class MyPageCon extends Component {
  state = {
    myData: []
  };

  findMyHistory = () => {
    const db = firebase.firestore();
    const docRef = db.collection('donghang');
    const { myData } = this.state;
    const onComponent = this;

    return firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        docRef
          .where('uid', '==', user.uid)
          .get()
          .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              let data = doc.data();
              onComponent.setState({ myData: [...myData, data] });
            });
          })
          .catch(function(error) {
            console.log('Error getting documents: ', error);
          });
      }
    });
  };

  logout = () => {
    const { statusActions, history, userActions } = this.props;
    firebase
    .auth()
    .signOut()
    .then(function() {
      statusActions.isLogin();
      userActions.getUser();

      history.replace("/");
    });
  }

  componentDidMount(){
    this.findMyHistory();
  }

  render() {
    const { userData, history } = this.props;
    const { myData } = this.state;

    return (
      <div>
        {userData.name === undefined ? (
          <NeedAuth history={history} />
        ) : (
          <MyPageForm userData={userData} myData={myData} logout={this.logout}/>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.user.toJS().data
});
const mapDispatchToProps = dispatch => ({
  statusActions: bindActionCreators(statusActions, dispatch),
  userActions: bindActionCreators(userActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPageCon);
