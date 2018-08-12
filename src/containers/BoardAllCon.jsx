import React, { Component } from 'react';
import styled from 'styled-components';

import BoardList from '../components/BoardList';
import BoardDetail from '../components/BoardDetail';
import BoardSort from '../components/BoardSort';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as listAllActions from '../modules/listAll';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

class BoardAllCon extends Component {

  a =  () => {
   this.props.listAllActions.ListUpAll();
   console.log(this.props.dataList);
  }

  componentDidMount(){
    this.a();
  }
  render() {
    return (
      <Container>
        <BoardSort />
        <BoardList />
        <BoardDetail />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  dataList: state.listAll.getIn([0, "city"])
});
const mapDispatchToProps = dispatch => ({
  listAllActions: bindActionCreators(listAllActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardAllCon);
