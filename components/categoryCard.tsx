import * as React from 'react';

interface EmojiCardProps {
  emoji: string;
  subgroup: string;
  subgroup2?: string;
  group: string;
  handleFilter: (group: string) => void;
}

const CategoryCard: React.FunctionComponent<EmojiCardProps> = ({
  emoji,
  group,
  subgroup,
  handleFilter,
}) => {
  return (
    <React.Fragment>
      <button
        onClick={() => handleFilter(subgroup)}
        className="flex items-baseline justify-start pl-7 bg-gray-50 py-2 rounded-md hover:bg-gray-100"
      >
        <span className=" text-xl mr-4 " role={'img'} aria-label={emoji}>
          {emoji}
        </span>
        <p>{group}</p>
      </button>
    </React.Fragment>
  );
};

export default CategoryCard;
