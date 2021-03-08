import React, { useEffect, useState } from 'react';
import BlogList from '../BlogList';
import './styles.scss';

function Home() {
  const [blogs, setblogs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:4000/blogs')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setblogs(data);
          setLoading(false);
        });
    }, 1000);
  }, []);

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setblogs(newBlogs);
  // };

  return (
    <div className='home'>
      {loading && <div>Loading ...</div>}
      {blogs && <BlogList blogs={blogs} title='Blogs' />}
    </div>
  );
}

export default Home;
