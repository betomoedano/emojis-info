import * as React from 'react';
import type { NextPage } from 'next';
import emojisData from '../data/emojis';
import Layout from '../components/layout';
import List from '../components/list';
import CategoryCard from '../components/categoryCard';
import Footer from '../components/footer';

const Home: NextPage = () => {
  const [filteredEmojis, setFilteredEmojis] = React.useState(
    emojisData.slice(0, 1000)
  );

  function handleFilterByCategory(category: string) {
    setFilteredEmojis(
      emojisData.filter((emoji) =>
        emoji.group.toUpperCase().includes(category.toUpperCase())
      )
    );
  }

  return (
    <React.Fragment>
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
            handleFilter={handleFilterByCategory}
            emoji="😀"
            subgroup={'Smileys'}
            group={'Smileys & People'}
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="🐶"
            subgroup="animal"
            group={'Animals & Nature'}
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="🍔"
            subgroup={'Food'}
            group={'Food & Drink'}
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="⚽️"
            subgroup="Activities"
            group="Activities"
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="🏨"
            subgroup="travel"
            group={'Travel & Places'}
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="💡"
            subgroup="objects"
            group="Objects"
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="⚛️"
            subgroup="symbols"
            group="Symbols"
          />
          <CategoryCard
            handleFilter={handleFilterByCategory}
            emoji="🚩"
            subgroup="flag"
            group="Flags"
          />
        </div>
        <List emojis={filteredEmojis} />
      </Layout>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
