// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Editor from 'draft-js-plugins-editor';
import type { EditorState } from 'draft-js';

import BackButton from '../BackButton';
import Button from '../BlogButton';
import postActions from '../../../redux/reducers/post/actions';
import blogActions from '../../../redux/reducers/blog/actions';

import './BlogPost.Module.scss';
import 'draft-js/dist/Draft.css';

import type { DraftComponentType, RoleType } from '../../../types/component';

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

  render(): React$Element<any> {
    const {
      content,
      title,
      history,
      role,
      createNewDraft,
      match: {
        params: { id },
      },
    } = this.props;
    return (
      <div className="BlogPost">
        <BackButton history={history} />
        {role === 'admin' && (
          <Button label="Edit Post" onClick={(): void => createNewDraft(id)} />
        )}
        <h1>{title}</h1>
        <div className="BlogPostBody">
          <Editor editorState={content} onChange={() => {}} readonly />
        </div>
      </div>
    );
  }
}

type StatePropsType = {
  content: EditorState,
  title: string,
  role: RoleType,
};

const mapStateToProps = ({
  auth: { role },
  post: { content, title },
}: {
  auth: { role: RoleType },
  post: { content: EditorState, title: string },
}): StatePropsType => ({
  content,
  title,
  role,
});

const mapDispatchToProps = (dispatch: Dispatch): void => {
  const { getBlogPostData, clearPostData } = postActions;
  const { createNewDraft } = blogActions;
  return bindActionCreators(
    {
      getBlogPostData,
      clearPostData,
      createNewDraft,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
