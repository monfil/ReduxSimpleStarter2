import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class BookDetail extends Component {
  render() {
    return(
      <div>Book Detail!</div>
    );
  }
}

function mapeStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapeStateToProps)(BookDetail);
