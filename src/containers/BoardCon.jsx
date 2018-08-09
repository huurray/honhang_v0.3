import React, { Component } from 'react';
import BoardList from '../components/BoardList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as searchActions from '../modules/search';

class BoardCon extends Component {
  render() {
    
    return (
      <div>
        {this.props.searchValue}
        <BoardList />
      </div>
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