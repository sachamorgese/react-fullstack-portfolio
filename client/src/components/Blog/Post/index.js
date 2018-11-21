import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostEditor from '../PostEditor';
import actions from '../../../redux/reducers/post/actions';
import './Post.Module.scss';

class Post extends React.Component {
  componentDidMount() {
    const {
      newDraft,
      getEditorState,
      match: {
        params: { id },
      },
    } = this.props;
    if (!newDraft) {
      getEditorState(id);
    }
  }

  render() {
    const {
      editorState,
      updateEditorState,
      match: {
        params: { id },
      },
    } = this.props;
    return (
      <>
        <input placeholder="Title" className="title-box" />
        <PostEditor
          editorState={editorState}
          updateEditorState={updateEditorState}
          id={id}
        />
      </>
    );
  }
}

const mapStateToProps = ({ post: { editorState }, blog: { newDraft } }) => ({
  editorState,
  newDraft,
});

const mapDispatchToProps = (dispatch) => {
  const { updateEditorState, getEditorState, createEditorState } = actions;
  return bindActionCreators(
    {
      updateEditorState,
      getEditorState,
      createEditorState,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);
