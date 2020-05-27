// @flow
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { BlogStateType, PostItemType, ReduxType } from '../../../types/state';
import blogActions from '../../../redux/reducers/blog/actions';
import LoadingSpinner from '../../Shared/LoadingSpinner';

type StatePropsType = {
  blogPosts: Array<PostItemType>,
  loading: boolean,
};

const { getBlogPosts } = blogActions;

const BlogHome = (): React$Element<any> => {
  const { blogPosts, loading }: StatePropsType = useSelector((state: ReduxType): BlogStateType => state.blog);

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