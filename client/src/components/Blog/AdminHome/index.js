// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from '../../../redux/reducers/blog/actions';

class Home extends Component {
  componentWillMount() {
    const { getDrafts } = this.props;
    getDrafts();
  }

  render() {
    const { createNewDraft } = this.props;
    return (
      <>
        <button type="button" onClick={createNewDraft}>
          New Post
        </button>
        <ul>
          <li>List item!</li>
        </ul>
      </>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Function) => {
  const { createNewDraft, getDrafts } = actions;
  return bindActionCreators(
    {
      createNewDraft,
      getDrafts,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
