// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogEntryType } from '../../../types/component';

type BlogEntryPropsType = {
  post: BlogEntryType,
};

export default function BlogEntry({
  post,
}: BlogEntryPropsType): React$Element<any> {
  const {
    title, subtitle, created, updated, _id: postId,
  } = post;
  return (
    <li className="BlogEntry">
      <Link className="BlogEntry__Title" to={`/blog/post/${postId}`}>
        <h2>{title}</h2>
      </Link>
      <h3 className="BlogEntry__Subtitle">{subtitle}</h3>
      <span className="BlogEntry__Created">
        {new Date(updated || created).toLocaleString()}
      </span>
    </li>
  );
}
