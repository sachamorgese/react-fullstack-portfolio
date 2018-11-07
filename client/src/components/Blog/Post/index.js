import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostEditor from '../PostEditor';
import { updateEditorState } from '../../../redux/reducers/actions';
import './Post.Module.scss';

const Post = (props) => {
  const { editorState } = props;
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
  return bindActionCreators({ updateEditorState }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);
