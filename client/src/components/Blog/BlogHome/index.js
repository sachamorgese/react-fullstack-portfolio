// @flow
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { BlogStateType, PostItemType, ReduxType } from '../../../types/state';
import blogActions from '../../../redux/reducers/blog/actions';
import LoadingSpinner from '../../Shared/LoadingSpinner';

const { getBlogPosts } = blogActions;

const BlogHome = (): React$Element<any> => {
  const { blogPosts, loading } = useSelector((state: ReduxType): BlogStateType => state.blog);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogPosts())
  }, [dispatch])

  return (
    loading ?
      <LoadingSpinner /> :
      (
        <ul>
          {
            // eslint-disable-next-line no-underscore-dangle
            blogPosts.map((post: PostItemType): React$Element<any> => <li key={post._id}>{post.title}</li>)
          }
        </ul>
      )
  )
}

export default BlogHome;