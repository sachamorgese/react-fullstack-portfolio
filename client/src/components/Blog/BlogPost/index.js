// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../../../redux/reducers/post/actions';
import './BlogPost.module.scss';

import type { DraftComponentType } from '../../../types/component';

class Post extends React.Component<DraftComponentType> {
  componentDidMount() {
    const {
      getBlogPostData,
      match: {
        params: { id },
      },
    } = this.props;
    getBlogPostData(id);
  }

  render() {
    const { content, title } = this.props;
    return (
      <>
        <h1>{title}</h1>
        <div className="BlogPostBody">Bob</div>
      </>
    );
  }
}

const mapStateToProps = ({ post: { content, title } }) => ({
  content,
  title,
});

const mapDispatchToProps = (dispatch: Function) => {
  const { getBlogPostData } = actions;
  return bindActionCreators(
    {
      getBlogPostData,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);
