import Card from './card';
import * as MatchingGame from '../matching_game';
import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);

    const board = new MatchingGame.Board();
    this.state = {
      board: board,
      shownCard: null,
      score: 0,
    }
  }

  checkMatch() {
    console.log("!!!");
  }

  render() {
    const cards = this.state.board.cards.map((card, idx) => (
      <Card card={card} key={idx} />
    ));

    

    return (
      <div>
        <ul id="board">{cards}</ul>
      </div>
    )
  }

}

export default Game;
