import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import emojisData from '../data/emojis';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Emojis Info</title>
        <meta name="description" content="Informations about emojis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl">Emojis Info</h1>
    </div>
  );
};

export default Home;
