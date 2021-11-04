import React from 'react';
import {Post} from '../Interface';

interface PostsProps {
  posts: Post[];
  loading: boolean;
}
const Posts = ({posts, loading}: PostsProps) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map((post) => (
        <li key={post.id} className='list-group-item '>
          {post.id} - {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
