// @flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../../../redux/reducers/blog/actions';

import type { adminHomeComponentType } from '../../../redux/reducers/types';

class Home extends Component<adminHomeComponentType> {
  componentWillMount() {
    const { getDrafts } = this.props;
    getDrafts();
  }

  render() {
    const { createNewDraft, drafts } = this.props;
    return (
      <>
        <button type="button" onClick={createNewDraft}>
          New Post
        </button>
        <ul>
          {drafts.map((dr) => {
            const { title, _id: id } = dr;
            const url = `/blog/post/${id}`;
            return (
              <li key={id}>
                <Link to={url}>{title || 'untitled'}</Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

const mapStateToProps = ({ blog: { drafts } }) => ({ drafts });

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
