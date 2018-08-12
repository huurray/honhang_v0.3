import React, { Component } from 'react';
import styled from 'styled-components';
import BoardList from '../components/BoardList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as searchActions from '../modules/search';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

class BoardCon extends Component {
  render() {
    
    return (
      <Container>
        {this.props.searchValue}
        <BoardList />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  searchValue: state.search.get('searchValue')
});
const mapDispatchToProps = dispatch => ({
  searchActions: bindActionCreators(searchActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardCon);