import React from 'react';
import { useHistory, useParams } from 'react-router';
import useFetch from '../../Hooks/useFetch';
import './styles.scss';

function BlogDetails() {
  const { id } = useParams();
  const { data: blog, loading, error } = useFetch(
    'http://localhost:4000/blogs/' + id
  );
  const history = useHistory();

  const handleDelete = () => {
    fetch('http://localhost:4000/blogs/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <div className='blog-details'>
      {loading && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article className='blog'>
          <h1>{blog.title}</h1>
          <h3>Written by {blog.author}</h3>
          <p>{blog.body}</p>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
