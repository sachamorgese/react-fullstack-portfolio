// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PostEditor from '../PostEditor';
import actions from '../../../redux/reducers/post/actions';
import './Draft.Module.scss';

import type { DraftComponentType } from '../../../types/component';
import BackButton from '../BackButton';

class Post extends React.Component<DraftComponentType> {
  componentDidMount() {
    const {
      newDraft,
      getDraftData,
      match: {
        params: { id },
      },
    } = this.props;
    if (!newDraft) {
      getDraftData(id);
    }
  }

  onChange = (e) => {
    const { updateTitle } = this.props;
    updateTitle(e.target.value);
  };

  onBlur = (e) => {
    const {
      saveTitle,
      match: {
        params: { id },
      },
    } = this.props;
    saveTitle(id, e.target.value);
  };

  render() {
    const {
      editorState,
      updateEditorState,
      saveDraftContent,
      title,
      failed,
      postBlogPost,
      history,
      match: {
        params: { id },
      },
    } = this.props;
    return (
      <div className="Draft--root">
        <BackButton history={history} />
        <input
          placeholder="Title"
          className="TitleBox"
          value={title}
          onChange={this.onChange}
          onBlur={this.onBlur}
        />
        <PostEditor
          editorState={editorState}
          updateEditorState={updateEditorState}
          saveDraftContent={saveDraftContent}
          postBlogPost={postBlogPost}
          history={history}
          id={id}
          failed={failed}
        />
      </div>
    );
  }
}

const mapStateToProps = ({
  post: { content: editorState, title },
  blog: { newDraft, failed },
}) => ({
  editorState,
  newDraft,
  title,
  failed,
});

const mapDispatchToProps = (dispatch: Function) => {
  const {
    updateEditorState,
    updateTitle,
    getDraftData,
    saveDraftContent,
    createEditorState,
    saveTitle,
    postBlogPost,
  } = actions;
  return bindActionCreators(
    {
      updateEditorState,
      updateTitle,
      getDraftData,
      saveDraftContent,
      createEditorState,
      saveTitle,
      postBlogPost,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);
