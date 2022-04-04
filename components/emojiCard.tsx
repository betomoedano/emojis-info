import * as React from 'react';

export interface EmojiCardProps {
  code: string;
  emoji: string;
  name: string;
  category: string;
  group: string;
  subgroup: string;
}

const EmojiCard: React.FunctionComponent<EmojiCardProps> = ({
  code,
  emoji,
  name,
  category,
  group,
  subgroup,
}) => {
  return (
    <React.Fragment>
      <h1 className="text-5xl">{emoji}</h1>
      <p>{name}</p>
    </React.Fragment>
  );
};

export default EmojiCard;
