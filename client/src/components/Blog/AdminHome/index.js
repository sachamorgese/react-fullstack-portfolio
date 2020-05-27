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
import Button from '../BlogButton';
import LoadingSpinner from '../../Shared/LoadingSpinner';
// css
import '../../../style/components/Blog/AdminHome.Module.scss';
// types
import type { AdminHomeComponentType } from '../../../types/component';
import type {
  DispatchType,
  MessageItemType,
  PostItemType,
} from '../../../types/state';
import type { ActionType } from '../../../types/actionType';

class AdminHome extends Component<AdminHomeComponentType> {
  componentDidMount() {
    const { getAllPosts } = this.props;
    getAllPosts();
  }

  onDeleteClick = (name: string, index: number) => {
    const { showMessage } = this.props;
    const payload = {
      name,
      index,
    };
    showMessage(payload);
  };

  render(): React$Element<any> {
    const {
      createNewDraft,
      hideMessage,
      deleteDraft,
      deleteBlogPost,
      drafts,
      blogPosts,
      messageItem,
      loading,
    } = this.props;
    return (
      <>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Button
              onClick={(): ActionType => createNewDraft()}
              label="New Post"
            />
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
              listName="BlogPosts"
              listArray={blogPosts}
              messageItem={messageItem}
              deleteEntry={deleteBlogPost}
              hideMessage={hideMessage}
              onDeleteClick={this.onDeleteClick}
              linkType="post"
            />
          </>
        )}
      </>
    );
  }
}

type StatePropsType = {
  drafts: Array<PostItemType>,
  blogPosts: Array<PostItemType>,
  isLoggedIn: boolean,
  name: string,
  messageItem: MessageItemType,
  loading: boolean,
};

const mapStateToProps = ({
  blog: { drafts, blogPosts, loading },
  auth: { isLoggedIn, name },
  message: { item: messageItem },
}: {
  blog: {
    drafts: Array<PostItemType>,
    blogPosts: Array<PostItemType>,
    loading: boolean,
  },
  auth: { isLoggedIn: boolean, name: string },
  message: { item: MessageItemType },
}): StatePropsType => ({
  drafts,
  blogPosts,
  messageItem,
  isLoggedIn,
  loading,
  name,
});

const mapDispatchToProps = (dispatch: DispatchType): void => {
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminHome);
