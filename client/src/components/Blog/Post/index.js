// @flow

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PostEditor from '../PostEditor';
import actions from '../../../redux/reducers/post/actions';
import './Post.Module.scss';

import type { postComponentType } from '../../../redux/reducers/types';

class Post extends React.Component<postComponentType> {
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
      match: {
        params: { id },
      },
    } = this.props;
    return (
      <>
        <>
          <input
            placeholder="Title"
            className="title-box"
            value={title}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
          <PostEditor
            editorState={editorState}
            updateEditorState={updateEditorState}
            saveDraftContent={saveDraftContent}
            id={id}
            failed={failed}
          />
        </>
      </>
    );
  }
}

const mapStateToProps = ({
  post: { content: editorState, title },
  blog: { newDraft },
}) => ({
  editorState,
  newDraft,
  title,
});

const mapDispatchToProps = (dispatch: Function) => {
  const {
    updateEditorState,
    updateTitle,
    getDraftData,
    saveDraftContent,
    createEditorState,
    saveTitle,
  } = actions;
  return bindActionCreators(
    {
      updateEditorState,
      updateTitle,
      getDraftData,
      saveDraftContent,
      createEditorState,
      saveTitle,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);
