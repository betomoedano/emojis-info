import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import emojisData from '../data/emojis';
import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Emojis Info" metaDescription="A list of emojis">
      <h1 className=" text-4xl font-bold text-text-primary text-center">
        Emojis Info 💡
      </h1>
    </Layout>
  );
};

export default Home;
