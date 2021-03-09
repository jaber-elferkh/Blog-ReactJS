import React, { useState } from 'react';
import './styles.scss';

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('ahmed');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, author, body };

    console.log(blog);
  };

  return (
    <div className='createBlog'>
      <h1>Create New Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog author:</label>
        <select
          placeholder='Select author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value='Jaber'>Jaber</option>
          <option value='Ayoub'>Ayoub</option>
        </select>
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <button>Add Blog</button>
      </form>
    </div>
  );
}

export default CreateBlog;
