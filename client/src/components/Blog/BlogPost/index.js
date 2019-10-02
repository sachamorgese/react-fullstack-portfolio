// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Editor from 'draft-js-plugins-editor';
import 'draft-js/dist/Draft.css';

import BackButton from '../BackButton';
import actions from '../../../redux/reducers/post/actions';
import './BlogPost.Module.scss';

import type { DraftComponentType } from '../../../types/component';

class Post extends React.Component<DraftComponentType> {
  componentDidMount() {
    const { history, clearPostData } = this.props;
    history.listen(() => {
      clearPostData();
    });
    const {
      getBlogPostData,
      match: {
        params: { id },
      },
    } = this.props;
    getBlogPostData(id);
  }

  render() {
    const { content, title, history } = this.props;
    return (
      <div className="BlogPost">
        <BackButton history={history} />
        <h1>{title}</h1>
        <div className="BlogPostBody">
          <Editor editorState={content} onChange={() => {}} readonly />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ post: { content, title } }) => ({
  content,
  title,
});

const mapDispatchToProps = (dispatch: Function) => {
  const { getBlogPostData, clearPostData } = actions;
  return bindActionCreators(
    {
      getBlogPostData,
      clearPostData
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);
