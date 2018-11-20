import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostEditor from '../PostEditor';
import actions from '../../../redux/reducers/post/actions';
import './Post.Module.scss';

class Post extends React.Component {
  componentDidMount() {}

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
  const { updateEditorState, getEditorState } = actions;
  return bindActionCreators(
    {
      updateEditorState,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post);
