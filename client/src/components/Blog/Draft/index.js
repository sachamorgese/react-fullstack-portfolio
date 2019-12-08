// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import type { EditorState as EditorStateType } from 'draft-js';
import PostEditor from '../PostEditor';
import actions from '../../../redux/reducers/post/actions';

import './Draft.Module.scss';

import type { DraftComponentType } from '../../../types/component';
import BackButton from '../BackButton';
import type { DispatchType } from '../../../types/state';
import LoadingSpinner from '../../Shared/LoadingSpinner';

class Post extends React.Component<DraftComponentType> {
  componentDidMount() {
    const {
      history,
      clearPostData,
      newDraft,
      getDraftData,
      match: {
        params: { id },
      },
    } = this.props;

    history.listen(() => {
      clearPostData();
    });

    if (!newDraft) {
      getDraftData(id);
    }
  }

  onChange = (e: SyntheticInputEvent<any>) => {
    const { updateTitle } = this.props;
    updateTitle(e.target.value);
  };

  onBlur = (e: SyntheticInputEvent<any>) => {
    const {
      saveTitle,
      match: {
        params: { id },
      },
    } = this.props;
    saveTitle(id, e.target.value);
  };

  render(): React$Element<any> {
    const {
      editorState,
      updateEditorState,
      saveDraftContent,
      title,
      failed,
      postBlogPost,
      history,
      loading,
      match: {
        params: { id },
      },
    } = this.props;
    return (
      <>
        {loading ? (
          <LoadingSpinner />
        ) : (
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
        )}
      </>
    );
  }
}

type BlogStateType = {
  newDraft: boolean,
  failed: boolean,
  loading: boolean,
};

type PostStateType = {
  content: EditorStateType,
  title: string,
};

type PropsType = {
  newDraft: boolean,
  failed: boolean,
  editorState: EditorStateType,
  title: string,
};

const mapStateToProps = ({
  post: { content, title },
  blog: { newDraft, failed, loading },
}: {
  post: PostStateType,
  blog: BlogStateType,
}): PropsType => ({
  editorState: content,
  newDraft,
  title,
  failed,
  loading,
});

const mapDispatchToProps = (dispatch: DispatchType): void => {
  const {
    updateEditorState,
    updateTitle,
    getDraftData,
    saveDraftContent,
    createEditorState,
    saveTitle,
    postBlogPost,
    clearPostData,
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
      clearPostData,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
