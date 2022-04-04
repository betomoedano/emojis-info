import * as React from 'react';
import type { NextPage } from 'next';
import emojisData from '../data/emojis';
import Layout from '../components/layout';
import List from '../components/list';
import CategoryCard from '../components/categoryCard';

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Emojis Info" metaDescription="A list of emojis">
      <h1 className=" text-4xl font-bold text-text-primary text-center tracking-wide">
        Welcome to Infoji 💡
      </h1>
      <div className="flex justify-center">
        <input
          className="w-full max-w-xl border border-gray-300 p-3 rounded-md m-8 bg-white shadow-md focus:outline-none focus:border-cyan-500 focus:ring-1"
          id="name"
          type="text"
          placeholder="Search for an emoji"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
        <CategoryCard
          emoji="😀"
          subgroup="smileys"
          group={'Smileys & People'}
        />
        <CategoryCard emoji="🐶" subgroup="animal" group={'Animals & Nature'} />
        <CategoryCard emoji="🍔" subgroup="food" group={'Food & Drink'} />
        <CategoryCard emoji="⚽️" subgroup="activity" group="Activity" />
        <CategoryCard emoji="🏨" subgroup="travel" group={'Travel & Places'} />
        <CategoryCard emoji="💡" subgroup="objects" group="Objects" />
        <CategoryCard emoji="⚛️" subgroup="symbols" group="Symbols" />
        <CategoryCard emoji="🚩" subgroup="flag" group="Flags" />
      </div>
      <List emojis={emojisData.slice(1000, 2000)} />
    </Layout>
  );
};

export default Home;
