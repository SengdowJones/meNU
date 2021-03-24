import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
      <Hero />
      <Content />
    </>
  );
};

if (module.hot) {
  module.hot.accept();
  }

export default Home;
