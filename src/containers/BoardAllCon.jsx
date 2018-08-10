import React, { Component } from 'react';
import BoardList from '../components/BoardList';
import BoardDetail from '../components/BoardDetail';
import BoardSort from '../components/BoardSort';

class BoardAllCon extends Component {
  render() {
    return (
      <div>
        <BoardSort />
        <BoardList />
        <BoardDetail />
      </div>
    );
  }
}

export default BoardAllCon;