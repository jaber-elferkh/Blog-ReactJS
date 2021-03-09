import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../../Hooks/useFetch';
import './styles.scss';

function BlogDetails() {
  const { id } = useParams();
  const { data: blog, loading, error } = useFetch(
    'http://localhost:4000/blogs/' + id
  );

  return (
    <div className='blog-details'>
      {loading && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article className='blog'>
          <h1>{blog.title}</h1>
          <h3>Written by {blog.author}</h3>
          <p>{blog.body}</p>
          <button>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
