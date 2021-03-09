import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './styles.scss';

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('ahmed');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, author, body };

    setLoading(true);
    setTimeout(() => {
      fetch('http://localhost:4000/blogs/', {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(blog),
      }).then(() => {
        console.log('new blog added');
        setLoading(false);
        history.push('/');
      });
    }, 1000);
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

        {!loading && <button>Add Blog</button>}
        {loading && <button disabled>Adding Blog ...</button>}
      </form>
    </div>
  );
}

export default CreateBlog;
