import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostEditor from '../PostEditor';
import actions from '../../../redux/reducers/actions';
import './Post.Module.scss';

const Post = (props) => {
  const { editorState, updateEditorState } = props;
  return (
    <>
      <input placeholder="Title" className="title-box" />
      <PostEditor
        editorState={editorState}
        updateEditorState={updateEditorState}
      />
    </>
  );
};

const mapStateToProps = ({ post }) => ({
  editorState: post.editorState,
});

const mapDispatchToProps = (dispatch) => {
  const { updateEditorState } = actions;
  return bindActionCreators({ updateEditorState }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);
