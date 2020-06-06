// @flow
// libraries
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// components
import LinksList from '../LinksList';
// actions
import blogActions from '../../../redux/reducers/blog/actions';
import messageActions from '../../../redux/reducers/messages/actions';
import Button from '../BlogButton';
import LoadingSpinner from '../../Shared/LoadingSpinner';
// css
import '../../../style/components/Blog/AdminHome.Module.scss';
// types
import type { ReduxType } from '../../../types/state';

const {
  createNewDraft,
  getAllPosts,
  deleteDraft,
  deleteBlogPost,
} = blogActions;
const { showMessage, hideMessage } = messageActions;

export default function AdminHome(): React$Element<any> {
  const dispatch = useDispatch();
  const {
    blog: { drafts, blogPosts, loading },
    message: { item: messageItem },
  } = useSelector((state: ReduxType): ReduxType => state)

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  function onDeleteClick (name: string, index: number) {
    const payload = {
      name,
      index,
    };
    dispatch(showMessage(payload));
  }

  return (
    <>
      {loading ? (
        <LoadingSpinner />
        ) : (
          <>
            <Button
              onClick={(): void => dispatch(createNewDraft())}
              label="New Post"
            />
            <LinksList
              listName="Drafts"
              listArray={drafts}
              messageItem={messageItem}
              deleteEntry={deleteDraft}
              hideMessage={hideMessage}
              onDeleteClick={onDeleteClick}
              linkType="draft"
            />
            <LinksList
              listName="BlogPosts"
              listArray={blogPosts}
              messageItem={messageItem}
              deleteEntry={deleteBlogPost}
              hideMessage={hideMessage}
              onDeleteClick={onDeleteClick}
              linkType="post"
            />
          </>
        )}
    </>
    );
}
