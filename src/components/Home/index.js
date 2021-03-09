import React, { useEffect, useState } from 'react';
import useFetch from '../../Hooks/useFetch';
import BlogList from '../BlogList';
import './styles.scss';

function Home() {
  const { data: blogs, loading, error } = useFetch(
    'http://localhost:4000/blogs'
  );

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {loading && <div>Loading ...</div>}
      {blogs && <BlogList blogs={blogs} title='Blogs' />}
    </div>
  );
}

export default Home;
