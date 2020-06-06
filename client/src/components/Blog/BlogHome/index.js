// @flow
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogEntry from '../BlogEntry'
import type { BlogStateType, ReduxType } from '../../../types/state';
import blogActions from '../../../redux/reducers/blog/actions';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import '../../../style/components/Blog/BlogHome.Module.scss';
import type { BlogEntryType } from '../../../types/component';

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
            blogPosts.map((post: BlogEntryType): React$Element<any> => <BlogEntry key={post._id} post={post} />)
          }
        </ul>
      )
  )
}

export default BlogHome;