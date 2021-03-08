import React from 'react';
import './styles.scss';

function BlogList({ blogs, title }) {
  return (
    <div className='blogList'>
      <h1 className='title'>{title}</h1>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
