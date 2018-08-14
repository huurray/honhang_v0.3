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

  state = {
    selectIndex: -1 
  }

  getlists = () => {
    this.props.listAllActions.listUpAll();
  };

  componentDidMount() {
    this.getlists();
  }

  onSelect = (i) => {
    this.setState({selectIndex: i})
  }

  render() {
    const { dataList } = this.props;
    const { selectIndex } = this.state;

    return (
      <Container>
        {dataList.loading && 'loading...'}
        <BoardSort />
        <BoardList dataList={dataList} onSelect={this.onSelect} />
        <BoardDetail dataList={dataList} selectIndex={selectIndex} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  dataList: state.listAll.toJS()
});
const mapDispatchToProps = dispatch => ({
  listAllActions: bindActionCreators(listAllActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardAllCon);
