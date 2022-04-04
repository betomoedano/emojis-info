import * as React from 'react';
import type { NextPage } from 'next';
import emojisData from '../data/emojis';
import Layout from '../components/layout';
import List from '../components/list';

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Emojis Info" metaDescription="A list of emojis">
      <h1 className=" text-4xl font-bold text-text-primary text-center tracking-wide">
        Emojis Info 💡
      </h1>
      <div className="flex justify-center">
        <input
          className="w-full max-w-xl border border-gray-300 p-3 rounded-md m-8 bg-white shadow-md focus:outline-none focus:border-cyan-500 focus:ring-1"
          id="name"
          type="text"
          placeholder="Name"
        />
      </div>
      <List emojis={emojisData} />
    </Layout>
  );
};

export default Home;
