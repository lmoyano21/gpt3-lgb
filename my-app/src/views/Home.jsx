import React from 'react';
import { Footer, Blog, Possibility, MyWeb, Features, Header } from '../containers';
import { CTA, Brand } from '../components';

function Home() {
  return (
    <div>
      <Header />
      <Brand />
      <MyWeb />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home
