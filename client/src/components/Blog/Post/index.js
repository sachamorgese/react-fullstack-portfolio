import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostEditor from '../PostEditor';
import './Post.Module.scss';

const Post = () => {
  return (
    <>
      <input placeholder="Title" className="title-box" />
      <PostEditor />
    </>
  );
};

const mapStateToProps = ({ blog: { editorState } }) => ({
  editorState,
});

const mapDispatchToProps = (dispatch) => {
  const { submitRegistration, setFullName, setEmail, setPassword } = Creators;
  return bindActionCreators(
    {
      submitRegistration,
      setFullName,
      setEmail,
      setPassword,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);
