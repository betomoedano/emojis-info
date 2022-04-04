import * as React from 'react';
import EmojiCard, { EmojiCardProps } from './emojiCard';

export interface EmojiListProps {
  emojis: EmojiCardProps[];
}

const List: React.FunctionComponent<EmojiListProps> = ({ emojis }) => {
  return (
    <React.Fragment>
      {emojis.map((emoji, index) => {
        return <EmojiCard key={index} {...emoji} />;
      })}
    </React.Fragment>
  );
};

export default List;
