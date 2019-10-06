// @flow
// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// components
import LinksList from '../LinksList';
// actions
import blogActions from '../../../redux/reducers/blog/actions';
import messageAction from '../../../redux/reducers/messages/actions';
// css
import './AdminHome.Module.scss';
// types
import type { AdminHomeComponentType } from '../../../types/component';
import type { Dispatch } from '../../../types/state';

class Home extends Component<AdminHomeComponentType> {
  componentDidMount() {
    const { getAllPosts } = this.props;
    getAllPosts();
  }

  onDeleteClick = (name, index) => {
    const { showMessage } = this.props;
    const payload = {
      name,
      index,
    };
    showMessage(payload);
  };

  render() {
    const {
      createNewDraft,
      hideMessage,
      deleteDraft,
      deleteBlogPost,
      drafts,
      blogPosts,
      name,
      isLoggedIn,
      message: { item: messageItem },
    } = this.props;

    return (
      <>
        <button className="NewPost" type="button" onClick={createNewDraft}>
          New Post
        </button>
        {isLoggedIn ? (
          <span>{`Hello ${name}`}</span>
        ) : (
          <a href="/auth/google">LogIn</a>
        )}
        <LinksList
          listName="Drafts"
          listArray={drafts}
          messageItem={messageItem}
          deleteEntry={deleteDraft}
          hideMessage={hideMessage}
          onDeleteClick={this.onDeleteClick}
          linkType="draft"
        />
        <LinksList
          listName="Posts"
          listArray={blogPosts}
          messageItem={messageItem}
          deleteEntry={deleteBlogPost}
          hideMessage={hideMessage}
          onDeleteClick={this.onDeleteClick}
          linkType="post"
        />
      </>
    );
  }
}

const mapStateToProps = ({
  blog: { drafts, blogPosts },
  auth: { isLoggedIn, name },
  message,
}) => ({
  drafts,
  blogPosts,
  message,
  isLoggedIn,
  name,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  const {
    createNewDraft,
    getAllPosts,
    deleteDraft,
    deleteBlogPost,
  } = blogActions;
  const { showMessage, hideMessage } = messageAction;
  return bindActionCreators(
    {
      createNewDraft,
      getAllPosts,
      showMessage,
      hideMessage,
      deleteDraft,
      deleteBlogPost,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
