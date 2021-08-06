import React from 'react';
import { getName } from '../../../Utils/login';
import './Home.css';

function Home() {
  return (
    <>
      <h1 style={{ marginLeft: '40%' }}>Hello {getName()}</h1>
    </>
  );
}

export default Home;
