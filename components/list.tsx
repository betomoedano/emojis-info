import * as React from 'react';
import EmojiCard, { EmojiCardProps } from './emojiCard';

export interface EmojiListProps {
  emojis: EmojiCardProps[];
}

const List: React.FunctionComponent<EmojiListProps> = ({ emojis }) => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {emojis.map((emoji, index) => {
          return <EmojiCard key={index} {...emoji} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default List;
