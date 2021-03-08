import React from 'react';
import './styles.scss';

function Home() {
  const handleClick = (e) => {
    console.log('hello, jaber', e);
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Home;
