import React from 'react';
import Card from './Card';

type BoardProps = {
  id: string;
  title: string;
  cards: Array<{
    id: string;
    text: string;
  }>;
};

const Board: React.FC<BoardProps> = ({ id, title, cards }) => {
  return (
    <div className="board">
      <h2>{title}</h2>
      <div className="cards">
        {cards.map((card) => (
          <Card key={card.id} id={card.id} text={card.text} />
        ))}
      </div>
    </div>
  );
};

export default Board;
