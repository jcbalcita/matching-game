import Board from './board';
import * as MatchingGame from '../matching_game';
import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);

    const board = new MatchingGame.Board();
    this.board = board;
  }

  render() {
    let cards = this.board.cards.map((card, idx) => <li key={idx}>{card.value + card.suit}</li>);

    return (
      <ul>{cards}</ul>
    )
  }

}

export default Game;
